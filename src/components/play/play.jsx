import React from "react";
import "./play.scss";
import { withRouter } from "react-router-dom";
import CustomButton from "..//custom-button/custom-button";
import { firestore } from "../../firebase/firebase.utils";
import Timer from "../../components/timer/timer";
import { ReactComponent as Owl } from "../../assets/owl1.svg";

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nr_intrebare: 1,
      showAnswer: false,
      answerUser: "",
      metadata: {},
      intrebari: [{ intrebare: "" }],
      raspunsuri: [],
    };
  }

  componentDidMount() {
    const func1 = async () => {
      let newState = {};
      await firestore
        .collection("metadata")
        .doc("metadata")
        .get()
        .then((doc) => (newState.metadata = doc.data().pachete[this.props.id]));
      await firestore
        .doc(newState.metadata.db_link)
        .get()
        .then((doc) => (newState.intrebari = doc.data().arr));
      this.setState(newState);
    };
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    const func2 = async () => {
      let pachete = {};
      let intrebari = [];
      await firestore
        .collection("metadata")
        .doc("metadata")
        .get()
        .then((doc) => (pachete = doc.data().pachete));
      pachete = shuffle(pachete);
      console.log(pachete);
      for (let index = 0; index < 10; index++) {
        let element = [];
        await firestore
          .doc(pachete[index].db_link)
          .get()
          .then((doc) => (element = doc.data()));
        const intreb =
          element.arr[Math.floor(Math.random() * element.arr.length)];
        intrebari.push({
          ...intreb,
          full_etapa: `${pachete[index].sezonul} ${pachete[index].etapa}`,
        });
      }
      this.setState({ intrebari });
    };
    if (this.props.id != 424242) func1();
    else func2();
  }

  handleChange = (event) => {
    this.setState({ answerUser: event.target.value });
  };

  handleShowAnswer = () => this.setState({ showAnswer: true });

  handleNext = () => {
    let newState = {};
    if (this.state.nr_intrebare < this.state.intrebari.length) {
      newState.raspunsuri = this.state.raspunsuri;
      newState.showAnswer = false;
      newState.nr_intrebare = this.state.nr_intrebare + 1;
      if (this.state.raspunsuri.length < this.state.nr_intrebare) {
        newState.raspunsuri.push(false);
      }
      this.setState(newState);
    } else
      alert(
        `Ați ajuns la sfârșitul pachetului, obținând ${this.state.raspunsuri.reduce(
          (prev, cur) => prev + (cur ? 1 : 0),
          0
        )} răspunsuri corecte din ${
          this.state.nr_intrebare
        } posibile. Felicitări!`
      );
  };

  handleTrue = () => {
    let newState = {};
    newState.raspunsuri = this.state.raspunsuri;
    if (this.state.raspunsuri.length === this.state.nr_intrebare) {
      newState.raspunsuri[this.state.nr_intrebare - 1] = true;
    } else newState.raspunsuri.push(true);
    this.setState(newState);
  };

  handleFalse = () => {
    let newState = {};
    newState.raspunsuri = this.state.raspunsuri;
    if (this.state.raspunsuri.length === this.state.nr_intrebare) {
      newState.raspunsuri[this.state.nr_intrebare - 1] = false;
    } else newState.raspunsuri.push(false);
    this.setState(newState);
  };

  render() {
    return (
      <div className="gamepage">
        <div className="text">
          <div className="question">
            <div className="title">
              Întrebarea
              {` ${
                this.state.nr_intrebare
              } (scor: ${this.state.raspunsuri.reduce(
                (prev, cur) => prev + (cur ? 1 : 0),
                0
              )}/${this.state.nr_intrebare})`}
              :
              <Timer
                time={
                  60 +
                  Math.floor(
                    (this.state.intrebari[
                      this.state.nr_intrebare - 1
                    ].intrebare.split(" ").length *
                      9) /
                      20
                  )
                }
              />
            </div>
            {this.state.intrebari[this.state.nr_intrebare - 1].intrebare}
          </div>

          <div
            className="answer"
            style={{
              visibility: this.state.showAnswer ? "visible" : "hidden",
              position: "relative",
            }}
          >
            <div className="title">Răspuns:</div>
            <Owl
              className="background"
              style={{
                visibility: this.state.showAnswer ? "hidden" : "visible",
              }}
            />
            {`${this.state.intrebari[this.state.nr_intrebare - 1].raspuns}`}
            <span style={{ fontWeight: "bold" }}>{` (Autor: ${
              this.state.intrebari[this.state.nr_intrebare - 1].autor
            })`}</span>
          </div>
        </div>

        <div className="interaction">
          <div className="try">
            <input
              value={this.state.value}
              placeholder="Răspunsul tău..."
              onChange={this.handleChange}
            />
            <CustomButton onClick={this.handleShowAnswer}>
              Vezi răspunsul
            </CustomButton>
          </div>
          <div
            className="judge"
            style={{
              visibility: this.state.showAnswer ? "visible" : "hidden",
            }}
          >
            <div className="title">Consideri ca răspunsul tău este corect?</div>
            <CustomButton
              onClick={this.handleTrue}
              style={{
                backgroundColor:
                  this.state.raspunsuri.length === this.state.nr_intrebare &&
                  this.state.raspunsuri[this.state.nr_intrebare - 1] === true
                    ? "#7952b3"
                    : "#6c757d",
              }}
            >
              Da
            </CustomButton>
            <CustomButton
              onClick={this.handleFalse}
              style={{
                backgroundColor:
                  this.state.raspunsuri.length === this.state.nr_intrebare &&
                  this.state.raspunsuri[this.state.nr_intrebare - 1] === false
                    ? "#7952b3"
                    : "#6c757d",
              }}
            >
              Nu
            </CustomButton>
          </div>
          <CustomButton
            onClick={this.handleNext}
            important
            style={{ margin: "50px auto", width: "calc(100% - 400px)" }}
          >
            Următoarea întrebare
          </CustomButton>
        </div>
      </div>
    );
  }
}

export default withRouter(Play);

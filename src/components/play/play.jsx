import React from "react";
import "./play.scss";
import { withRouter } from "react-router-dom";
import CustomButton from "..//custom-button/custom-button";
import { firestore } from "../../firebase/firebase.utils";
import Timer from "../../components/timer/timer";

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
    const func = async () => {
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
    func();
  }

  handleChange = (event) => {
    this.setState({ answerUser: event.target.value });
  };

  handleShowAnswer = () => this.setState({ showAnswer: true });

  handleNext = () => {
    let newState = {};
    newState.raspunsuri = this.state.raspunsuri;
    newState.showAnswer = false;
    newState.nr_intrebare = this.state.nr_intrebare + 1;
    if (this.state.raspunsuri.length < this.state.nr_intrebare) {
      newState.raspunsuri.push(false);
    }
    this.setState(newState);
    console.log(this.state.raspunsuri);
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
              Întrebarea {`${this.state.nr_intrebare}`}:
              <Timer
                time={
                  60 +
                  Math.floor(
                    (this.state.intrebari[
                      this.state.nr_intrebare - 1
                    ].intrebare.split(" ").length *
                      3) /
                      10
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
            <div
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

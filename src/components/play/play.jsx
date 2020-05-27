import React from "react";
import "./play.scss";
import { withRouter } from "react-router-dom";
import CustomButton from "..//custom-button/custom-button";
import { firestore } from "../../firebase/firebase.utils";
import Timer from "../../components/timer/timer";
import { ReactComponent as Owl } from "../../assets/owl1.svg";
import Endpage from "../../pages/endpage/endpage";

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nr_intrebare: 1,
      showAnswer: false,
      loading: true,
      answerUser: [""],
      metadata: {},
      intrebari: [{ intrebare: "", raspuns: "" }],
      raspunsuri: [],
    };
  }

  func1 = async () => {
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
    newState.metadata.full_etapa = `${newState.metadata.sezonul} ${newState.metadata.etapa}`;
    this.setState({ ...newState, loading: false });
  };

  shuffle = (array) => {
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
  };

  func2 = async () => {
    let pachete = {};
    let intrebari = [];
    await firestore
      .collection("metadata")
      .doc("metadata")
      .get()
      .then((doc) => (pachete = doc.data().pachete));
    pachete = this.shuffle(pachete);
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
    this.setState({ intrebari, loading: false });
  };

  componentDidMount() {
    if (this.props.id != 424242) {
      try {
        this.func1();
      } catch (err) {
        this.func1();
      }
    } else {
      try {
        this.func2();
      } catch (err) {
        this.func2();
      }
    }
  }

  handleChange = (event) => {
    let newState = {};
    newState.answerUser = this.state.answerUser;
    newState.answerUser[this.state.nr_intrebare - 1] = event.target.value;
    this.setState(newState);
  };

  handleShowAnswer = () => this.setState({ showAnswer: true });

  handleTrue = () => {
    let newState = {};
    newState.raspunsuri = this.state.raspunsuri;
    newState.raspunsuri.push(true);
    newState.showAnswer = false;
    newState.answerUser = this.state.answerUser;
    newState.answerUser.push("");
    newState.nr_intrebare = this.state.nr_intrebare + 1;
    this.setState(newState);
  };

  handleFalse = () => {
    let newState = {};
    newState.raspunsuri = this.state.raspunsuri;
    newState.raspunsuri.push(false);
    newState.showAnswer = false;
    newState.answerUser = this.state.answerUser;
    newState.answerUser.push("");
    newState.nr_intrebare = this.state.nr_intrebare + 1;
    this.setState(newState);
  };

  render() {
    console.log(this.state.loading);
    return this.state.nr_intrebare <= this.state.intrebari.length ? (
      <div className="gamepage">
        <div className="text">
          <div className={`question ${this.state.showAnswer ? "" : "show"}`}>
            <div className="title">
              {this.state.loading ? (
                <b>Se încarcă...</b>
              ) : (
                <>
                  Întrebarea
                  {` ${this.state.nr_intrebare}`} (
                  <span style={{ color: "#49ad40" }}>
                    {`${this.state.raspunsuri.reduce(
                      (prev, cur) => prev + (cur ? 1 : 0),
                      0
                    )}`}
                  </span>
                  <span style={{ padding: "0 3px" }}>:</span>
                  <span style={{ color: "rgb(255, 102, 102)" }}>
                    {`${this.state.raspunsuri.reduce(
                      (prev, cur) => prev + (cur ? 0 : 1),
                      0
                    )}`}
                  </span>
                  )
                  {this.state.showAnswer ? (
                    <></>
                  ) : (
                    <Timer
                      key={this.state.nr_intrebare}
                      time={
                        60 +
                        (this.state.loading ||
                          Math.floor(
                            (this.state.intrebari[
                              this.state.nr_intrebare - 1
                            ].intrebare.split(" ").length *
                              9) /
                              20
                          ))
                      }
                    />
                  )}
                </>
              )}
            </div>
            {this.state.intrebari[this.state.nr_intrebare - 1].intrebare}
            {this.state.loading ? (
              <></>
            ) : (
              <>
                <br />
                <span>
                  {`Etapa: ${
                    this.props.id == 424242
                      ? this.state.intrebari[this.state.nr_intrebare - 1]
                          .full_etapa
                      : this.state.metadata.full_etapa
                  }`}
                </span>
              </>
            )}
          </div>
          <div
            className={`answer ${this.state.showAnswer ? "show" : ""}`}
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
            {this.state.intrebari[this.state.nr_intrebare - 1].raspuns
              .split(/Comentari[ui]:|Surs[aă]:|Comentariu|Surs[aă]|S:|C:/)
              .map((s, i, a) =>
                s.trim().length > 0 ? (
                  <>
                    {console.log(s)}
                    <div
                      style={{
                        fontWeight: i === 0 && a.length > 1 ? "bold" : "normal",
                        paddingBottom: "3px",
                        overflowWrap: "break-word",
                        wordWrap: "break-word",
                      }}
                    >
                      {s.trim().substr(0, 4) === "http"
                        ? `Sursa: ${s.trim()}`
                        : i > 0
                        ? `Comentariu: ${s.trim()}`
                        : s.trim()}
                    </div>
                  </>
                ) : null
              )}
            <span>{`Autor: ${
              this.state.intrebari[this.state.nr_intrebare - 1].autor
            }`}</span>
          </div>
        </div>

        <div className="interaction">
          <div className={`try ${this.state.showAnswer ? "" : "show"}`}>
            <input
              value={this.state.answerUser[this.state.nr_intrebare - 1]}
              placeholder="Răspunsul tău..."
              onChange={this.handleChange}
            />
            <CustomButton onClick={this.handleShowAnswer}>
              Vezi răspunsul
            </CustomButton>
          </div>
          <div
            className={`judge ${this.state.showAnswer ? "show" : ""}`}
            style={{
              visibility: this.state.showAnswer ? "visible" : "hidden",
            }}
          >
            <div className="title">Ai răspuns corect?</div>
            <CustomButton
              onClick={this.handleTrue}
              style={{
                backgroundColor: "#49ad40",
              }}
            >
              Da
            </CustomButton>
            <CustomButton
              onClick={this.handleFalse}
              style={{
                backgroundColor: "#ff4f42",
              }}
            >
              Nu
            </CustomButton>
          </div>
        </div>
      </div>
    ) : (
      <Endpage
        intrebari={this.state.intrebari}
        answerUser={this.state.answerUser}
        judge={this.state.raspunsuri}
      />
    );
  }
}

export default withRouter(Play);

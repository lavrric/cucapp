import React from "react";
import "./gamepage.scss";
import CustomButton from "../../components/custom-button/custom-button";

const testQuestions = [
  {
    autor: "Alexandru Lebedev",
    intrebare:
      "Zyzzyva este numele unei insecte descoperite în Brazilia în 1922. Numele i-a fost dat în glumă pentru a fi ținută minte, deoarece nu exista o denumire latină sau braziliană a acestei insecte. Mulți nu știu cum ea arată și această insectă nu are nici o trăsătură fizică ce ar scoate-o în evidență. Totuși, majoritatea lingviștilor o cunosc. Răspundeți peste un minut de ce anume?",
    raspuns:
      "În majoritatea dicționarelor în engleză acest cuvânt este ultimul Sursă: https://en.wikipedia.org/wiki/Zyzzyva",
  },
  {
    autor: "Florea Victoria",
    intrebare:
      "Mama vitregă a împăratului Theophilos a decis ca mireasa să-i fie aleasă prin concurs. Astfel, în anul 820 Theophilos a adunat la curtea sa cele mai distinse domnișoare din Constantinopol. Alegând-o pe Theodora, i-a dat un obiect, ceea ce semnifica că urma să se căsătorească cu ea. Numiți obiectul prin trei cuvinte, știind că el joacă un rol central într-un basm românesc.",
    raspuns: "Măr de aur. Sursa: https://byzantium.gr/bitwed.html",
  },
];

class GamePage extends React {
  constructor(props) {
    super(props);
    this.state = {
      question: 1,
      showAnswer: false,
    };
  }
  handleClick = () => {
    if (this.state.showAnswer) {
      this.setState((prevState) => ({
        question:
          prevState.question + (testQuestions.length > prevState.question),
        showAnswer: false,
      }));
    } else {
      this.setState({ showAnswer: true });
    }
  };
  render() {
    return (
      <div className="gamepage">
        <div className="card">
          <div className="intrebare">
            <div className="title">Intrebare: </div>
            {testQuestions[this.state.question - 1].intrebare}
          </div>
          <div
            style={{ visibility: this.state.showAnswer ? "visible" : "hidden" }}
            className="raspuns"
          >
            <div className="title">Raspuns: </div>
            {testQuestions[this.state.question - 1].raspuns}
          </div>
        </div>
        <CustomButton handleClick={this.handleClick}>Apasa</CustomButton>
      </div>
    );
  }
}

export default GamePage;

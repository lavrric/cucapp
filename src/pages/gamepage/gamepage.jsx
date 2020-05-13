import React from "react";
import "./gamepage.scss";
import CustomButton from "../../components/custom-button/custom-button";

const testQuestions = [
  {
    autor: "Alexandru Lebedev",
    intrebare:
      "Atenție, în întrebare au fost făcute înlocuiri. Conform unei versiuni, această tradiţie, care este actuală şi azi, a apărut în secolul XVII, când marinarii britanici obişnuiau după fiecare luptă să coboare X-ul lor pentru a lăsa loc X-ului invizibil al Alfei. Aceasta sublinia măreţia şi puterea Alfei, precum şi faptul că în faţa sa toţi sunt egali – atât cei care au câştigat lupta, cât şi cei înfrânţi. Nu vă întrebăm care este tradiţia. Scrieţi ce s-a înlocuit prin X şi Alfa.",
    raspuns:
      "X – steag (se acceptă drapel), Alfa – Moartea Comentariu: După fiecare luptă marinarii britanici dădeau steagul în jos, lăsând un spaţiu liber egal cu lăţimea steagului. Spaţiul liber se presupunea că e ocupat de steagul invizibil al Morţii, subliniind puterea nemărginită a acesteia şi egalitatea în faţa ei a tuturor oamenilor, atât câştigători, cât şi înfrânţi. Sursa: https://thequestion.ru/questions/123125/otkuda-poshla.. vremya-traura",
  },
  {
    autor: "Florea Victoria",
    intrebare:
      "Mama vitregă a împăratului Theophilos a decis ca mireasa să-i fie aleasă prin concurs. Astfel, în anul 820 Theophilos a adunat la curtea sa cele mai distinse domnișoare din Constantinopol. Alegând-o pe Theodora, i-a dat un obiect, ceea ce semnifica că urma să se căsătorească cu ea. Numiți obiectul prin trei cuvinte, știind că el joacă un rol central într-un basm românesc.",
    raspuns: "Măr de aur. Sursa: https://byzantium.gr/bitwed.html",
  },
];

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 1,
      showAnswer: false,
      answer: "",
    };
  }
  handleChange = (event) => {
    this.setState({ answer: event.target.value });
  };
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
        <div className="text">
          <div className="question">
            <div className="title">Intrebare:</div>
            {testQuestions[this.state.question - 1].intrebare}
          </div>

          <div
            className="answer"
            style={{
              visibility: this.state.showAnswer ? "visible" : "hidden",
              position: "relative",
            }}
          >
            <div className="title" style={{ visibility: "visible" }}>
              Raspuns:
            </div>
            <div
              style={{
                visibility: this.state.showAnswer ? "hidden" : "visible",
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                backgroundImage: `url(https://ok-forum.ro/oc-content/plugins/slider/images/5dcc171a909b5.jpg)`,
                backgroundSize: "cover",
              }}
            />
            {`${testQuestions[this.state.question - 1].raspuns}`}
            <span style={{ fontWeight: "500" }}>{` (Autor: ${
              testQuestions[this.state.question - 1].autor
            })`}</span>
          </div>
        </div>

        <div className="interaction">
          <div className="try">
            <input value={this.state.value} placeHolder="Raspunsul tau..." />
            <CustomButton onClick={this.handleClick}>
              Vezi raspunsul
            </CustomButton>
          </div>
          <div
            className="judge"
            style={{
              visibility: this.state.showAnswer ? "visible" : "hidden",
            }}
          >
            <div className="title">Consideri ca rapsunsul tau este corect?</div>
            <CustomButton>Da</CustomButton>
            <CustomButton>Nu</CustomButton>
          </div>
          <CustomButton
            important
            style={{ margin: "50px auto", width: "calc(100% - 400px)" }}
          >
            Urmatoarea Intrebare
          </CustomButton>
        </div>
      </div>
    );
  }
}

export default GamePage;

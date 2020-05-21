import React from "react";
import "./endpage.scss";

const review = [
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: true,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga ",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "Aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "Aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "Aici e rapsunsul de user",
    isCorrect: false,
  },
];

const Endpage = () => (
  <div className="endpage">
    <div className="intro">
      <div className="title">Cuc Review</div>
      <div className="title">
        Scorul tău: <span style={{ color: "#49ad40" }}>19</span>:
        <span style={{ color: "rgb(255, 102, 102)" }}>21</span>
      </div>
    </div>
    <div className="review">
      {review.map(({ intrebare, raspuns, raspuns_user, isCorrect }, i) => (
        <div className="review-item">
          <div className="option id">{i}</div>
          <div className="option intrebare">{intrebare}</div>
          <div className="option raspuns">{raspuns}</div>
          <div className="option raspuns_user">{raspuns_user}</div>
          <div
            className="option corect"
            style={{
              fontWeight: "bold",
              color: isCorrect ? "#49ad40" : "rgb(255, 102, 102)",
            }}
          >
            {isCorrect ? "Corect" : "Greșit"}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Endpage;

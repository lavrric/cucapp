import React from "react";
import "./endpage.scss";

const review = [
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: true,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga ",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
  {
    intrebare:
      "aici e o intrebare pizdet ce lunga lunga lunga lunga lunga lunga lunga lunga lunga lunga",
    raspuns: "aici e un raspuns pizdet pizdet ce lung lung lung",
    raspuns_user: "aici e rapsunsul de user",
    isCorrect: false,
  },
];

const Endpage = () => (
  <div className="endpage">
    <div className="intro">
      <div className="title">Cuc Review</div>
      <div className="title">Scorul tău: 30/40</div>
    </div>
    <div className="review">
      {review.map(({ intrebare, raspuns, raspuns_user, isCorrect }) => (
        <div className="review-item">
          <div className="option intrebare">{intrebare}</div>
          <div className="option raspuns">{raspuns}</div>
          <div className="option raspuns_user">{raspuns_user}</div>
          <div className="option corect">{isCorrect ? "true" : "false"}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Endpage;

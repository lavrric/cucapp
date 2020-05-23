import React, { useState } from "react";
import "./endpage.scss";

function Endpage({ intrebari, answerUser, judge }) {
  const [selected, selectNew] = useState(-1);
  return (
    <div className="endpage">
      <div className="intro">
        <div className="title">Rezumat</div>
        <div className="title">
          Scorul tău:{" "}
          <span style={{ color: "#49ad40" }}>{`${judge.reduce(
            (cur, value) => cur + (value ? 1 : 0),
            0
          )}`}</span>
          :
          <span style={{ color: "rgb(255, 102, 102)" }}>{`${judge.reduce(
            (cur, value) => cur + (value ? 0 : 1),
            0
          )}`}</span>
        </div>
      </div>
      <div className="review">
        <div className="review-item first" style={{ cursor: "context-menu " }}>
          <div className="option id">#</div>
          <div className="option intrebare">
            Întrebarea (click pentru întrebarea completă)
          </div>
          <div className="option raspuns">Răspunsul corect</div>
          <div className="option raspuns_user">Răspunsul oferit</div>
          <div className="option corect">Corectitudinea</div>
        </div>
        {intrebari.map(({ intrebare, raspuns }, i) => (
          <div
            className={`review-item ${selected === i ? "selected" : ""} ${
              i % 2 === 0 ? "grey" : ""
            }`}
            onClick={() => selectNew(i === selected ? -1 : i)}
          >
            <div className="option id">{i + 1}</div>
            <div className="option intrebare">
              {i === selected || intrebare.length <= 69
                ? intrebare
                : `${intrebare.substr(0, 69)}...`}
            </div>
            <div className="option raspuns">
              {i === selected ||
              raspuns.split(
                /Comentari[ui]:|Surs[aă]:|Comentariu|Surs[aă]|S:|C:/
              )[0].length <= 20
                ? raspuns.split(
                    /Comentari[ui]:|Surs[aă]:|Comentariu|Surs[aă]|S:|C:/
                  )[0]
                : `${raspuns
                    .split(
                      /Comentari[ui]:|Surs[aă]:|Comentariu|Surs[aă]|S:|C:/
                    )[0]
                    .substr(0, 20)}...`}
            </div>
            <div className="option raspuns_user">
              {i === selected || answerUser[i].length <= 20
                ? answerUser[i]
                : `${answerUser[i].substr(0, 20)}...`}
            </div>
            <div
              className="option corect"
              style={{
                fontWeight: "bold",
                color: judge[i] ? "#49ad40" : "rgb(255, 102, 102)",
              }}
            >
              {judge[i] ? "Corect" : "Greșit"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Endpage;

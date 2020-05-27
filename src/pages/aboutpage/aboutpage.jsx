import React from "react";
import "./aboutpage.scss";
import logo from "../../assets/owlmov.svg";

const AboutPage = () => (
  <div className="aboutpage">
    <div className="info">
      <div className="title">DESPRE CuCapp</div>
      <div className="descriere">
        Erau odată, demult, 2 adolescenți pasionați de CUC și informatică:
        Mihail și Claudiu. Totul mergea bine, în fiecare luni echipa
        Jean-Jacques Pidjaques întrunindu-se trandioțional la EPIQ. Frumos, nu?
        Însă, a apărut carantina :((. <div className="br" />
        Fiindu-i echipei dor să joace CUC, au decis să joace niște pachete din
        arhivă pentru a se antrena. Problema era ca răspunsurile veneau direct
        după întrebare și mereu era nevoie de un moderator care nu joacă să
        citească întrebările. Astfel a apărut ideea unei platforme cu ajutorul
        căreia va fi mai comod de jucat CUC, fără a apela la vreun moderator.
        <div className="br" />
        Așa a apărut CuCapp.
        <div className="br" />
        La moment, site-ul e în versiunea beta, deci mai avem de rezolvat unele
        bug-uri. La fel, din cauza că suntem nevoiți să folosim un serviciu de
        hosting gratuit, nu vă recomandăm să faceți refresh la pagină. Suntem
        întotdeauna deschiși la propuneri pentru features noi, iar în caz că
        aveți una, sau ați descoperit un bug, puteți să ne contactați pe oricare
        din noi pe facebook:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/mihail.lavric.1"
        >
          Mihail
        </a>
        {", "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/claudebbn"
        >
          Claudiu
        </a>
        .
        <div className="br" />
        Vă urăm un joc plăcut!
      </div>
    </div>

    <div className="logo">
      <img src={logo} alt="" />
    </div>
  </div>
);

export default AboutPage;

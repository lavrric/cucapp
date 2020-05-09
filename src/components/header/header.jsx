import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => (
  <div className="header">
    <Link to="/" className="title">
      CuCapp
    </Link>
    <div className="options">
      <Link to="/select" className="option">
        Joaca Pachet
      </Link>
      <Link to="/play" className="option">
        Joaca Intrebari
      </Link>
      <Link className="option">Cauta Intrebari</Link>
      <Link className="option">Inregistreaza-te</Link>
      <Link className="option">Despre proiect</Link>
    </div>
  </div>
);

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Owl } from "../../assets/owl.svg";

const Header = () => (
  <div className="header">
    <Link to="/" className="title">
      <Owl />
      CuCapp
      <span className="beta">beta</span>
    </Link>
    <div className="options">
      <Link to="/select" className="option">
        Joacă Pachet
      </Link>
      <Link to="/play/424242" className="option">
        Joacă Random
      </Link>
      <Link className="option">Caută întrebări</Link>
      <Link className="option">Înregistrează-te</Link>
      <Link className="option">Despre proiect</Link>
    </div>
  </div>
);

export default Header;

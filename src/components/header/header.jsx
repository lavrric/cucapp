import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  let id = Math.floor(Math.random() * 12);
  return (
    <div className="header">
      <Link to="/" className="title">
        CuCapp
      </Link>
      <div className="options">
        <Link to="/select" className="option">
          Joacă Pachet
        </Link>
        <Link to={`/play/${id}`} className="option">
          Joacă Întrebări
        </Link>
        <Link className="option">Caută întrebări</Link>
        <Link className="option">Înregistrează-te</Link>
        <Link className="option">Despre proiect</Link>
      </div>
    </div>
  );
};

export default Header;

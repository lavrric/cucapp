import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Owl } from "../../assets/owl.svg";

function Header() {
  const [count, setCount] = useState(0);
  return (
    <div className="header">
      <Link to="/" className="title">
        <Owl />
        CuCapp
        <span className="beta">beta</span>
      </Link>
      <button className="menu" onClick={() => setCount((count + 1) % 2)} />
      <div className={`options ${count ? "show" : ""}`}>
        <Link
          onClick={() => setCount((count + 1) % 2)}
          to="/select"
          className="option"
        >
          Joacă Pachete
        </Link>
        <Link
          onClick={() => setCount((count + 1) % 2)}
          to="/play/424242"
          className="option"
        >
          Joacă Random
        </Link>
        <Link
          onClick={() => setCount((count + 1) % 2)}
          className="option"
          to="/search"
        >
          Caută întrebări
        </Link>
        {/* <Link onClick={() => setCount((count + 1) % 2)} className="option">Înregistrează-te</Link> */}
        <Link onClick={() => setCount((count + 1) % 2)} className="option">
          Despre proiect
        </Link>
      </div>
    </div>
  );
}

export default Header;

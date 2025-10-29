import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1 fw-bold fs-5">Région Auvergne-Rhône-Alpes</p>
        <p className="mb-0 small">
          101 cours Charlemagne – CS 20033 – 69269 LYON CEDEX 02 <br />
          +33 (0)4 26 73 40 00
        </p>

        <p className="BasPage">
          <Link to="/Notfound" className="text-light mx-2 ">
            Mentions légales
          </Link>
          |
          <Link to="/Notfound" className="text-light mx-2">
            Accessibilité
          </Link>
          |
          <Link to="/Notfound" className="text-light mx-2">
            Cookies
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

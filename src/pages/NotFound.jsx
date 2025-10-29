import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../images/erreur-404.png"

function NotFound() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{
        minHeight: "80vh",
        backgroundColor: "#f8f9fa",
        padding: "2rem",
      }}
    >
      {/* Image 404 */}
      <img
        src={notFoundImage}
        alt="Page non trouvée"
        style={{
          width: "350px",
          maxWidth: "80%",
          marginBottom: "2rem",
        }}
      />

      {/* Texte d'erreur */}
      <h1 className="fw-bold mb-3" style={{ color: "#0074c7" }}>
        Page non trouvée
      </h1>
      <p className="text-muted fs-5 mb-4">
        La page que vous avez demandée n’existe pas ou a été déplacée.
      </p>

      {/* Bouton retour à l'accueil */}
      <Link
        to="/"
        className="btn btn-primary btn-lg px-4"
        style={{
          backgroundColor: "#0074c7",
          border: "none",
          borderRadius: "10px",
        }}
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}

export default NotFound;

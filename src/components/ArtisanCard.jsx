import React from "react";
import { Link } from "react-router-dom";

function ArtisanCard({ artisan }) {
  return (
    <div className="artisan-card text-center d-flex flex-column">
      <img
        src={artisan.image}
        alt={artisan.nom}
        className="artisan-img"
      />
      <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between">
        <div>
          <h5 className="fw-bold">{artisan.nom}</h5>
          <p className="text-muted mb-2">{artisan.specialite}</p>
          <p className="text-warning mb-2">{"⭐".repeat(artisan.note)}</p>
          <p className="text-secondary">{artisan.localisation}</p>
        </div>
        <Link
          to={`/artisan/${artisan.id}`}
          className="btn btn-outline-primary mt-3"
        >
          Voir le profil
        </Link>
      </div>
    </div>
  );
}

export default ArtisanCard;

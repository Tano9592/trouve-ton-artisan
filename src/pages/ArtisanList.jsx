import React from "react";
import { useParams } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard";

function ArtisanList() {
  const { categorie } = useParams();

  const artisans = [
    { id: 1, nom: "Menuiserie Dupont", specialite: "Menuiserie", note: 5, localisation: "Lyon" },
    { id: 2, nom: "Plomberie Martin", specialite: "Plomberie", note: 4, localisation: "Grenoble" },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-capitalize">
        Artisans - {categorie}
      </h2>
      <div className="row">
        {artisans.map((artisan) => (
          <ArtisanCard key={artisan.id} artisan={artisan} />
        ))}
      </div>
    </div>
  );
}

export default ArtisanList;

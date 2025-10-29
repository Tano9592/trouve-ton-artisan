import React from "react";
import { useParams, Link } from "react-router-dom";

function ArtisanDetail() {
  const { id } = useParams();

  // Liste d’artisans (mêmes id que dans Home.jsx)
  const artisans = [
    {
      id: 1,
      nom: "Menuiserie Dupont",
      specialite: "Menuiserie sur mesure",
      localisation: "Lyon",
      note: 5,
      description:
        "Entreprise familiale spécialisée dans la menuiserie artisanale depuis plus de 20 ans. Réalisation de meubles, escaliers et aménagements intérieurs sur mesure.",
    },
    {
      id: 2,
      nom: "Plomberie Martin",
      specialite: "Plomberie et chauffage",
      localisation: "Grenoble",
      note: 4,
      description:
        "Spécialiste en installation et dépannage de plomberie et chauffage. Intervention rapide et travail de qualité dans toute la région grenobloise.",
    },
    {
      id: 3,
      nom: "Boucherie Roux",
      specialite: "Boucherie - Charcuterie artisanale",
      localisation: "Clermont-Ferrand",
      note: 5,
      description:
        "Boucherie familiale proposant des produits locaux de qualité et des charcuteries faites maison depuis trois générations.",
    },
  ];

  // Cherche l’artisan correspondant à l’id de l’URL
  const artisan = artisans.find((a) => a.id === parseInt(id));

  if (!artisan) {
    return (
      <div className="container my-5 text-center">
        <h2 className="text-danger">Artisan introuvable 😢</h2>
        <Link to="/" className="btn btn-outline-primary mt-3">
          ← Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-outline-primary mb-4">
        ← Retour
      </Link>

      <h2 className="text-primary">{artisan.nom}</h2>
      <p className="fw-semibold">{artisan.specialite}</p>
      <p className="text-muted">{artisan.localisation}</p>
      <p className="text-warning fs-5">{"⭐".repeat(artisan.note)}</p>
      <p className="mt-3">{artisan.description}</p>

      <hr className="my-4" />

      <h4 className="mb-3">📩 Contactez cet artisan</h4>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Votre nom"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Votre email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Objet"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Votre message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ArtisanDetail;

import React from "react";
import ArtisanCard from "../components/ArtisanCard";
import "../styles/main.css";
import artisan1 from "../images/electricien.jpg";
import artisan2 from "../images/plombier.jpg";
import artisan3 from "../images/boucher.jpg";

function Home({ searchQuery = "" }) {
  const artisansDuMois = [
    { id: 1, nom: "Jean Dupont", specialite: "Menuiserie sur mesure", localisation: "Lyon", note: 5, image: artisan1 },
    { id: 2, nom: "Plomberie Martin", specialite: "Plomberie et chauffage", localisation: "Grenoble", note: 4, image: artisan2 },
    { id: 3, nom: "Boucherie Roux", specialite: "Boucherie artisanale", localisation: "Clermont-Ferrand", note: 5, image: artisan3 },
  ];

  const filteredArtisans = artisansDuMois.filter((a) => {
    const q = searchQuery.toLowerCase();
    return (
      a.nom.toLowerCase().includes(q) ||
      a.specialite.toLowerCase().includes(q) ||
      a.localisation.toLowerCase().includes(q)
    );
  });

  return (
    <div className="home-container text-center py-5">
      <section className="steps-section mb-5">
        <h1 className="fw-bold mb-4 text-dark">Comment trouver mon artisan ?</h1>
        <div className="steps-grid">
          {["Choisir la catégorie", "Choisir un artisan", "Le contacter", "Recevoir une réponse"].map((t, i) => (
            <div key={i} className="step-item">
              <div className="step-number">{i + 1}</div>
              <p>{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="artisans-section container my-5">
        <h2 className="mb-4 text-start fw-bold">Artisans du mois</h2>
        <div className="row justify-content-center g-4">
          {filteredArtisans.length ? (
            filteredArtisans.map((a) => (
              <div key={a.id} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <ArtisanCard artisan={a} />
              </div>
            ))
          ) : (
            <p className="text-muted">Aucun artisan trouvé.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;

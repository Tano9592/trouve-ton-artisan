import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ArtisanList from "./pages/ArtisanList";
import ArtisanDetail from "./pages/ArtisanDetail";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

function App() {
  // ✅ Ajoute un state pour la recherche
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      {/* ✅ On passe les props à Header */}
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />

      <main className="flex-grow-1">
        {/* ✅ On passe aussi la recherche à Home */}
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/categorie/:categorie" element={<ArtisanList />} />
          <Route path="/artisan/:id" element={<ArtisanDetail />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/accessibilite" element={<LegalPage />} />
          <Route path="/cookies" element={<LegalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ArtisanDetail from "./pages/ArtisanDetail";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
  // État global de la recherche
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      {/* On passe bien les deux props ici */}
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/artisan/:id" element={<ArtisanDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;

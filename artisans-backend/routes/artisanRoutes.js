// routes/artisanRoutes.js
import express from "express";
import Artisan from "../models/Artisan.js";

const router = express.Router();

// Récupérer tous les artisans
router.get("/", async (req, res) => {
  try {
    const artisans = await Artisan.findAll();
    res.json(artisans);
  } catch (error) {
    console.error("Erreur :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Récupérer un artisan par ID
router.get("/:id", async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);
    if (!artisan) return res.status(404).json({ message: "Artisan non trouvé" });
    res.json(artisan);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;

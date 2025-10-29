// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./sequelize.js";
import artisanRoutes from "./routes/artisanRoutes.js";
import Artisan from "./models/Artisan.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/artisans", artisanRoutes);

// Connexion à la base de données et démarrage du serveur
const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    console.log("✅ Base de données synchronisée !");
    app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Erreur de connexion :", err);
  });

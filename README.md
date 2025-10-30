# 🛠️ Trouve ton Artisan – Région Auvergne-Rhône-Alpes

## 📖 Contexte du projet
Ce projet a été réalisé dans le cadre de la formation **Développeur Full Stack**.  
L’objectif est de créer une **plateforme web permettant aux particuliers de trouver facilement un artisan** de la région Auvergne-Rhône-Alpes, selon leur catégorie et leur spécialité.  
Les utilisateurs peuvent consulter des fiches d’artisans et les contacter via un formulaire.

---

## ⚙️ Technologies utilisées

### Frontend
- **React.js**  
- **Bootstrap**  
- **CSS (responsive, mobile-first)**  

### Backend
- **Node.js / Express**  
- **MySQL** (Base de données des artisans)

---

## 🧱 Structure du projet

/artisans-auvergne
│
├── backend/
│ ├── server.js
│ ├── routes/
│ └── config/
│
├── src/
│ ├── components/
│ ├── pages/
│ ├── styles/
│ └── App.js
│
├── sql/
│ ├── create_db.sql
│ └── insert_data.sql
│
└── README.md


---

## 🔐 Sécurité mise en place
- Validation des formulaires côté client et serveur  
- Protection des routes API par clé d’accès  
- Requêtes SQL paramétrées pour éviter l’injection SQL   

---

## 🧪 Installation et lancement du projet

### Prérequis
- Node.js et npm installés
- MySQL en fonctionnement local

### Étapes
```bash
# Cloner le projet
git clone https://github.com/Tano9592/trouve-ton-artisan.git
cd trouve-ton-artisan

# Installer les dépendances frontend
npm install

# Démarrer le frontend
npm start

# Démarrer le backend
cd backend
node server.js

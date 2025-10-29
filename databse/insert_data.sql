CREATE TABLE IF NOT EXISTS artisans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  specialite VARCHAR(100) NOT NULL,
  localisation VARCHAR(100) NOT NULL,
  note DECIMAL(2,1) DEFAULT 0.0,
  image VARCHAR(255) DEFAULT NULL,
  description TEXT
);
INSERT INTO artisans (nom, specialite, localisation, note, image, description) VALUES
('Menuiserie Dupont', 'Menuisier', 'Lyon', 5.0, 'menuisier.jpg', 'Spécialiste du bois depuis 20 ans, menuiseries sur mesure.'),
('Plomberie Martin', 'Plombier', 'Grenoble', 4.0, 'plombier.jpg', 'Dépannage et installation rapide dans toute la région.'),
('Boucherie Roux', 'Boucher', 'Clermont-Ferrand', 4.5, 'boucher.jpg', 'Viandes locales et produits artisanaux de qualité.');

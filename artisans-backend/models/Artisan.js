
import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Artisan = sequelize.define("Artisan", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialite: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  localisation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  note: {
    type: DataTypes.DECIMAL(2, 1),
    defaultValue: 0.0,
  },
  image: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

export default Artisan;

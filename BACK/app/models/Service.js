import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Service = sequelize.define("Service", {
  name_serv: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description_serv: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  institutionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  institution_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Service;

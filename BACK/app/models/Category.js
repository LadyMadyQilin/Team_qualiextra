import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.FLOAT,
        primaryKey: true,
        autoIncrement: true,
        // ! toujours défini
        allowNull: false,
    },
    name_catg: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
})

export default Category;
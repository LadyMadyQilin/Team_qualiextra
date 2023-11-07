import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Category = sequelize.define('Category', {
    name_catg: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description_catg: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

export default Category;
import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Image = sequelize.define('Image', {
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
})

export default Image;
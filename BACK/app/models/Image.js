import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Image = sequelize.define('Image', {
    id: {
        type: DataTypes.FLOAT,
        primaryKey: true,
        autoIncrement: true,
        // ! toujours défini
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
})

export default Image;
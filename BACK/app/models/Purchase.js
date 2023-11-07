import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Purchase = sequelize.define('Purchase', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    date_start: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    date_end: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    hour_start: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hour_end: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

export default Purchase; 
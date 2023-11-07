import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Package = sequelize.define('Package', {
    price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    quantity: {
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
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    hour_start: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hour_end: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    join_catg: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    capacity: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

export default Package; 
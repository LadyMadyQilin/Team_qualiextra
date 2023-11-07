import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const User = sequelize.define('User', {
    role: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'user',
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    adress_user: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    city_user: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cp_user: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    phone_user: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image_profil: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

export default User;
import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Institution = sequelize.define('Institution', {
    name_ins: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email_ins: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Cette propriété doit être unique
        // validate: {
        //     isEmail: true, // Assurez-vous que la valeur est une adresse e-mail valide
        // },
    },
    adress_ins: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    city_ins: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cp_ins: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    phone_ins: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    average_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    experiences: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

})

export default Institution;
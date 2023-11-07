import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Style = sequelize.define('Style', {
    name_style: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

export default Style;
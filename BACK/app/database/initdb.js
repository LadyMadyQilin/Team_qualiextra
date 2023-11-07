
import { User, Category, Image, Institution, Package, Purchase, Service, Style } from '../models/index.js';

import sequelize from "../sequelize.js";

const init = async () => {
    await sequelize.sync({
        alter: true
        // force:true 
    })
}
init();
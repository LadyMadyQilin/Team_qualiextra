import sequelize from "../sequelize.js";

const init = async () => {
    await sequelize.sync({
        alter: true
        // force:true 
    })
}
init();
// import { Sequelize} from "sequelize";
const Sequelize = require("sequelize");

// const db = new Sequelize('casagri_promo','root2023','ktd70$fj51',{
//     host: 'www.casagri-group.com',
//     dialect: 'mysql',
//     port: 3306
// });
const db = new Sequelize('casagrig_promo','casagrig_root2023','Csg70dl20*',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

db.authenticate()
    .then(() => {
        console.log('Conexión establecida correctamente.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });
// export default db
module.exports = db;

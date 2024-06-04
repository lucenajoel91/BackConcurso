// importamos la conexion 
// import db from "../database/db.js";
// import { DataTypes, Sequelize } from "sequelize";
const db = require("../database/db.js");
const { DataTypes, Sequelize } = require("sequelize");

const Customer = db.define('Customer', {
    CustID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    CustAddres1: {type: DataTypes.STRING(255),},
    /* CustAddres2: {
        type: DataTypes.STRING(255),
    },*/
    CustBillID: {type: DataTypes.STRING(20),},
    CustEmail: {type: DataTypes.STRING(50),},
    CustName1: {type: DataTypes.STRING(100),},
    CustName2: {type: DataTypes.STRING(100),},
    CustPhone: {type: DataTypes.STRING(20),},
    CityID:{type: DataTypes.INTEGER,},
    StateID:{type: DataTypes.INTEGER,},
    CpnyID:{type: DataTypes.INTEGER,},
    /* User1:{
        type:'TIMESTAMP',    },
    User2:{
        type:'DECIMAL',    },*/
    User3:{
        type:'VARCHAR',    },
   /*  User4:{
        type:'VARCHAR',    },
    User5:{
        type:'DECIMAL',    },
    User6:{
       type:'VARCHAR',     }, */
     createdAt:{
         field:'createdAt',
         type:'TIMESTAMP',
         defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
         allowNull:false 
     }, 
     updatedAt:{
         field:'updatedAt',
         type:'TIMESTAMP',
         defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
         onUpdate : Sequelize.literal('CURRENT_TIMESTAMP'),
         allowNull:false 
     }
}, {
  tableName : 'Customer',
  timestamps : false 
});

// export default Customer
module.exports = Customer;

// // import  express  from "express";
// // import { createCustomer, getAll } from "../controllers/CustomerController.js";
// const express = require("express");
// const { createCustomer, getAll } = require("../controllers/CustomerController.js");

// const router= express.Router();

// router.get('/', getAll)
// router.post('/',createCustomer)

// // export default router
// module.exports = router;


const express = require("express");
const { createCustomer, getAll } = require("../controllers/CustomerController.js");
const verifyToken = require("../middleware/verifyToken.js"); // Asegúrate de ajustar la ruta según donde esté ubicado tu archivo verifyToken.js

const router= express.Router();

router.get('/', verifyToken, getAll);
router.post('/', verifyToken, createCustomer);

module.exports = router;

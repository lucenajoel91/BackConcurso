
const CustomerModel = require("../models/CustomerModels.js");
/*
exports.createCustomer = async (req, res) => {
    try {
        await CustomerModel.create(req.body)
        res.status(200).send('Datos insertados correctamente')
    } catch (error) {
        res.json({ message: error.message })
        console.log(error)
    }
}*/

exports.createCustomer = async (req, res) => {
    try {
        await CustomerModel.create(req.body)
        res.status(200).send('Datos insertados correctamente')
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

exports.getAll = async (req, res) => {
    try {
        const customers = await CustomerModel.findAll()
        res.json(customers)
    } catch (error) {
        //res.json({ message: error.message })
        res.status(500).json({ message: error.message })
    }
}


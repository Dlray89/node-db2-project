// import express
const express = require("express")


//config a connection to the database here
const db = require('../data/connection')

//connect express to the router
const router = express.Router()



router.get("/", (req,res) => {
    db("cars")
    .then(car =>{
        res.json(car)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} Could not connect`})
    })
})

//export the router
module.exports = router


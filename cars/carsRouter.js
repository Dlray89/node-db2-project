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

router.get("/:id", (req,res) => {
    const { id } = req.params
    db("cars").where({ id }).first()
    .then(car =>{
        res.status(200).json(car)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} We could not find car`})
    })


router.post("/", (req,res) => {
    const carData = req.body
    db("cars").insert(carData)
    .then(ids => {
        db("cars").where({ id : ids[0] })
        then(newCarEntry => {
            res.status(201).json(newCarEntry)
        })
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Failed to store car in database`})
    })
})

})
//export the router
module.exports = router


const express = require("express")
const helmet = require("helmet")

const server = express()

const carRouter = require("../cars/carsRouter")

server.use(helmet())
server.use(express.json())
server.use('/api/cars', carRouter)

server.get("/", (req,res) => {
    res.status(200).json({Message: "This get was successful"})
})

module.exports = server
//this is a connection to the database in its own file.

//import knex here
const knex = require("knex")

const knexfile = require("../knexfile")

const knexConfig =knexfile.development;

//make connection to database
module.exports = knex(knexConfig);
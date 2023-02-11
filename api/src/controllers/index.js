const { createDog } = require("./Dogs/createDog")
const { getRazas } = require("./Dogs/getRazas")
const { getTemperaments } = require("./Temperaments/getTemperaments")
const { RazaDetails } = require("./Dogs/RazaDetails")
const { searchRaza } = require("./Dogs/searchRaza")


module.exports = {
    createDog,
    getRazas,
    getTemperaments,
    RazaDetails,
    searchRaza
}
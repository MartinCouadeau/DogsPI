const { createDog } = require("./Dogs/createDog")
const { getBreed } = require("./Dogs/getBreed")
const { getTemperaments } = require("./Temperaments/getTemperaments")
const { breedDetails } = require("./Dogs/breedDetails")


module.exports = {
    createDog,
    getBreed,
    getTemperaments,
    breedDetails,
}
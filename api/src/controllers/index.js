const { createDog } = require("./Dogs/createDog")
const { getBreed } = require("./Dogs/getBreed")
const { getTemperaments } = require("./Temperaments/getTemperaments")
const { breedDetails } = require("./Dogs/breedDetails")
const { breedDelete } = require("./Dogs/breedDelete")
const { breedUpdate } = require("./Dogs/breedUpdate")


module.exports = {
    createDog,
    getBreed,
    getTemperaments,
    breedDetails,
    breedDelete,
    breedUpdate
}
const { Router } = require('express');
const { 
    createDog,
    getBreed,
    breedDetails,
    searchBreed } = require("../controllers/index")


const router = Router();

router.get("/",getBreed)
router.get("/:idRaza",breedDetails)
router.get("/name",searchBreed)
router.post("/",createDog)


module.exports = router
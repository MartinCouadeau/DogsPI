const { Router } = require("express");
const { 
    createDog,
    getBreed,
    breedDetails, 
} = require("../controllers/index")


const router = Router();



router.get("/", getBreed)
router.get("/:idBreed",breedDetails)
router.post("/",createDog)


module.exports = router
const { Router } = require("express");
const { 
    createDog,
    getBreed,
    breedDetails,
    breedDelete
} = require("../controllers/index")


const router = Router();



router.get("/", getBreed)
router.get("/:idBreed",breedDetails)
router.post("/",createDog)
router.delete("/:id", breedDelete)


module.exports = router
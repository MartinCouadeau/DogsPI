const { Router } = require("express");
const { 
    createDog,
    getBreed,
    breedDetails,
    breedDelete,
    breedUpdate
} = require("../controllers/index")


const router = Router();



router.get("/", getBreed)
router.get("/:idBreed",breedDetails)
router.post("/",createDog)
router.delete("/:id", breedDelete)
router.put("/:id", breedUpdate)


module.exports = router
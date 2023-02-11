const { Router } = require('express');


const router = Router();

router.get("/",getRazas)
router.get("/:idRaza",RazaDetails)
router.get("/name",searchRaza)
router.post("/",createDog)


module.exports = router
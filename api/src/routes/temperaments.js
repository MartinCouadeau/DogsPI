const { Router } = require('express');


const router = Router();


router.get("/temperaments",getTemperaments)


module.exports = router
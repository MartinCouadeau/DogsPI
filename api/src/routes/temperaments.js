const { Router } = require('express');
const { getTemperaments } = require("../controllers/index")


const router = Router();


 router.get("/",getTemperaments)


module.exports = router
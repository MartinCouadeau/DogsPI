const axios = require("axios");
const { apikey } = process.env;


const CreateDog = async (req, res) => {
    try {
        const {
            name,
            min_height,
            max_height,
            min_weight,
            max_weight,
            life_span,
            image, 
            createInDb,
            temperament
        } = req.body

        const newDog = 

    } catch (error) {
        
    }
    
}
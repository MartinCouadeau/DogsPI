const  { Dog, Temperament } = require("../../db")


const createDog = async (req, res) => {
    try {
        const {
            id,
            name,
            min_height,
            max_height,
            min_weight,
            max_weight,
            breed_group,
            life_span,
            image, 
            createInDb,
            temperament
        } = req.body
        const newDog = await Dog.create({
            id,
            name,
            min_height,
            max_height,
            min_weight,
            max_weight,
            breed_group,
            life_span,
            image, 
            createInDb,
        })

        let temperaments = await Temperament.findAll({
            where: {name : temperament}
        })

        newDog.addTemperament(temperaments)

        res.send("Breed created successfully!")
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = {
    createDog
}
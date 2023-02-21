const  { Dog, Temperament } = require("../../db")


const createDog = async (req, res) => {
    try {
        const {
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
            name,
            min_height,
            max_height,
            min_weight,
            max_weight,
            breed_group,
            life_span,
            image: image.url, 
            createInDb,
        })

        const temperaments = await Temperament.findAll({
            where: {
                name : temperament
            }
        })

        await newDog.addTemperament(temperaments)
        console.log(req.body.temperament)
        res.status(200).send("Breed created successfully")
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = {
    createDog
}
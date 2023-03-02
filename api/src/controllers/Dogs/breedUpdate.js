const { Dog, Temperament, DogTemperament } = require('../../db.js')


const breedUpdate = async (req, res) => {

    const { id } = req.params;
    const { name, min_height, max_height, min_weight, max_weight, life_span, breed_group, image, temperament} = req.body;


    try {
        await DogTemperament.destroy({
            where:{
                DogId: id
            }
        })
    
        await Dog.update(
            {
            name,
            min_height,
            max_height,
            min_weight,
            max_weight,
            life_span,
            breed_group,
            image
            }, {
            where:{
                id: id
            }
        })
        
        const dog = await Dog.findByPk(id)
    
        const dogTemperament = await Temperament.findAll({
            where: {
                name: temperament
            }
        })
    
    
        await dog.addTemperament(dogTemperament)
    
        res.status(200).send("Dog succesfully modificated")
        
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    breedUpdate
}
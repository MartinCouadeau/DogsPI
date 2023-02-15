const { getData } = require("../data/getData")

const breedDetails = async (req, res) => {
    try {
        const { idBreed } = req.params
        const allBreeds = await getData() // los id de la API llegan hasta 264 pero no estan todos, se saltea algunos numeros
        
        let foundBreed = await allBreeds.filter(el => el.id == idBreed)
        
        if (foundBreed.length > 0) {
            res.status(200).send(foundBreed)
        }else {
            throw new Error("ID erroneo")
        }
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = {
    breedDetails
}
const { getData } = require("../data/getData")


const getBreed = async () => {
    try {
        const name = req.query.name.toLowerCase()
        const allBreeds = await getData()
        if (name) {
            let breedName = await allDogs.filter(el => el.name.toLowerCase().includes(name))
            res.status(200).send(breedName)
        }else {
            res.status(200).send(allBreeds)
        }
    } catch (error) {
        res.status(404).json({error:error.message})
    }
    
}

module.exports = {
    getBreed
}
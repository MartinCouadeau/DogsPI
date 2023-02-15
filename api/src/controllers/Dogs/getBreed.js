const { getData } = require("../data/getData")


const getBreed = async (req, res) => {
    try {
        const name = req.query.name
        const allBreeds = await getData()
        if (name) {
            let breedName = await allBreeds.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            if (breedName.length > 0) {
                res.status(200).send(breedName)
            }else {
                throw new Error("Esa raza no esta registrada en nuestra Api")
            }
            
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
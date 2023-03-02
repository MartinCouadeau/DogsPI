const { Dog } = require('../../db.js')


const breedDelete = async (req, res) => {
    try {
        const { id } = req.params;
        await Dog.destroy({
            where: {
                id: id,
            }
        })
        res.status(200).send("Delete Succesfull")  
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    breedDelete
};
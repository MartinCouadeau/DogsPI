const  {Dog, Temperament } = require("../../db")


const getDBData = async () => {
    try {
        return await Dog.findAll({
            include: [{
                model:Temperament,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }]
        })
    } catch (error) {
        console.log(error.message)
    }
}


//getDBData().then(val => console.log(val))

module.exports = {
    getDBData
}
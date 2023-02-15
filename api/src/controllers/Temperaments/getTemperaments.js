const axios = require('axios')
const { API_KEY } = process.env
const { Temperament } = require("../../db")


const getTemperaments = async (req, res) => {
    try {
        const apiInfo = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const temperaments = apiInfo.data.map(breed => breed.temperament).join().split(",").sort()
        console.log(temperaments)
        await temperaments.filter((temp, ind) => temperaments.indexOf(temp) === ind)
        .forEach(temp => {
            if (temp.trim() !== "") {
                Temperament.findOrCreate({where: {
                    name: temp.trim()
                }})
            }
        });

        const dbTemperaments = Temperament.findAll({
            order: ["name"]
        })
        return dbTemperaments

        res.status(200).send(dbTemperaments)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}


module.exports = {
    getTemperaments
}
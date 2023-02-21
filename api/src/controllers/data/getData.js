const { getApiData } = require("./getApiData")
const { getDBData} = require("./getDBData")

const getData = async () => {
    try {
        const apiData  = await getApiData()
        let DBData = await getDBData()
        DBData = await DBData.map((breed) => {
            return {
              id: breed.dataValues.id,
              name: breed.dataValues.name,
              min_height: breed.dataValues.min_height,
              max_height: breed.dataValues.max_height,
              min_weight: breed.dataValues.min_weight,
              max_weight: breed.dataValues.max_weight,
              life_span: breed.dataValues.life_span,
              breed_group: breed.dataValues.breed_group,
              image: breed.dataValues.image,
              createInDb: breed.dataValues.createInDb,
              temperament: breed.dataValues.temperaments.map( t => t.name ).join(", "),
            };
        });
        const allData = apiData.concat(DBData)
        return allData
    } catch (error) {
        console.log(error.message)
    }
}

//getDBData().then(val => console.log(val))

module.exports = {
    getData
}
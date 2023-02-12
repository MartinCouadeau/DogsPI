const { getApiData } = require("./getApiData")
const { getDBData} = require("./getDBData")

const getData = async () => {
    try {
        const apiData  = await getApiData()
        const DBData = await getDBData()
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
const axios = require('axios');
const { Dog } = require("../../db")
const { API_KEY } = process.env

const getApiData = async () => {
	try {

		let apiData = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);


		apiData = await apiData.data.map((res) =>
			res.results.map((dog) => {
				return {
					id: dog.id,
					name: dog.name,
					min_height: dog.height.metric.split("-")[0].trim(),
					max_height: dog.height.metric.split("-").reverse()[0].trim(),
					min_weight: dog.weight.metric.split("-")[0].trim(),
					max_weight: dog.weight.metric.split("-").reverse()[0].trim(),
					breed_group: dog.breed_group,
					life_span: dog.life_span,
					image: dog.image, 
					createInDb: dog.createInDb,
					temperament: dog.temperament
				};
			})
		);

		return apiData;
	} catch (error) {
		return { error: error.message };
	}
};

module.exports = {
    saveApiData
};
import axios from "axios"



export function addBreed(breed) {
    try {
        return async function() {
            const res = await axios.post("http://localhost:3001/dogs", breed)
            return  res
        }
    } catch (error) {
        console.log(error.message)
    }
    
}
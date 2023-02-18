import { ADD_BREED } from "./type"
import axios from "axios"



export function addBreed(breed) {
    return async function(dispatch) {
        const json = await axios.post("http://localhost:3001/dogs", breed)
        return  dispatch({
            type: ADD_BREED,
            payload: json.data,
        })
    }
   }
import { GET_BREED_NAME } from "./type"
import axios from "axios"


export function getNameDogs (name){
    return async function (dispatch){
        var json = await axios.get(`http://localhost:3001/dogs?name=${name}`)
        return dispatch({
            type: GET_BREED_NAME,
            payload: json.data
        })
    }
}
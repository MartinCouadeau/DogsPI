import { GET_BREED_NAME } from "./type.jsx"
import axios from "axios"


export function getNameBreeds (name){
    return async function (dispatch){
        var json = await axios.get(`http://localhost:3001/dogs?name=${name}`)
        return dispatch({
            type: GET_BREED_NAME,
            payload: json.data
        })
    }
}
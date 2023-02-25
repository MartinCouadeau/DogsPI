import { GET_TEMPERAMENTS } from "./type.jsx"
import axios from "axios"


export function getTemperaments (){
    return async function (dispatch){
        const json = await axios.get("http://localhost:3001/temperaments")
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: json.data
        })
    }
}
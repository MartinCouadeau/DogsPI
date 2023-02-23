import { GET_BREEDS } from "./type.jsx"
import axios from "axios"


export function getBreeds() {
    return async function(dispatch) {
        const json = await axios.get("http://localhost:3001/dogs")
        return dispatch({
            type: GET_BREEDS,
            payload: json.data
        })
    }
}
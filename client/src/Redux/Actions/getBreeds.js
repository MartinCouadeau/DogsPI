import { GET_BREEDS } from "./type"
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
import axios from "axios";
import { UPDATE_BREED } from "./type.jsx"


export function updateBreed (payload, id){
    console.log("Front Action: ", payload)
    return async function(dispatch){
        await axios.put(`http://localhost:3001/dogs/${id}`, payload)
        return dispatch({
            type: UPDATE_BREED,
            payload: {
                payload,
                id
            }
        })
    }
}
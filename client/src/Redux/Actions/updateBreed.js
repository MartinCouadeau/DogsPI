import { UPDATE_BREED } from "./type";
import { axios } from "axios"


export function updateBreed (payload, id){
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
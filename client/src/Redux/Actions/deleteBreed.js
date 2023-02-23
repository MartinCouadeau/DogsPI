import { DELETE_BREED } from "./type.jsx"
import axios from "axios"


export function deleteBreed (id){
    return async function(dispatch){
        await axios.delete(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: DELETE_BREED,
            payload: id
        })
    }
}
import { GET_DETAIL } from "./type"


export function getDetail (id){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: GET_DETAIL,
            payload: json.data
        })
    }
}
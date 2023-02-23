import { UPDATE_CHANGE } from "./type.jsx"


export function updateChange(){
    return async function(dispatch){
        return dispatch({
            type: UPDATE_CHANGE
        })
    }
}
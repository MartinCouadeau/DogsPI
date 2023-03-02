import { SET_PAGE } from "./type.jsx"

export function setPage (payload){
    return {
        type: SET_PAGE,
        payload
    }
}
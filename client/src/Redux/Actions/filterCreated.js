import { FILTER_BY_CREATED } from "./type.jsx"


export function filterCreated (payload){
    return {
        type: FILTER_BY_CREATED,
        payload
    }
}
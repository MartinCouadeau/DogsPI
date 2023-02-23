import { FILTER_BY_TEMPERAMENT } from "./type.jsx"


export function filterTemperament (payload){
    return {
        type: FILTER_BY_TEMPERAMENT,
        payload
    }
}
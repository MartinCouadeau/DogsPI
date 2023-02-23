import { SEARCH_BREED } from "./type.jsx"


export function searchBreed (payload) {
    return {
        type: SEARCH_BREED,
        payload
    }
}
import { SEARCH_BREED } from "./type"


export function searchBreed (payload) {
    return {
        type: SEARCH_BREED,
        payload
    }
}
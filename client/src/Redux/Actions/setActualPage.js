import { SET_ACTUAL_PAGE } from "./type.jsx"

export function setActualPage (payload) {
    return {
        type: SET_ACTUAL_PAGE,
        payload
    }
}
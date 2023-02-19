import { SET_ACTUAL_PAGE } from "./type"

export function setActualPage (payload) {
    return {
        type: SET_ACTUAL_PAGE,
        payload
    }
}
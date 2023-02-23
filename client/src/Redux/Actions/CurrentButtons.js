import { SET_CURRENT_BUTTONS } from "./type.jsx"


export function setCurrentBottons (payload) {
    return {
        type: SET_CURRENT_BUTTONS,
        payload
    }
}
import { ORDER_BY_HEIGHT } from "./type.jsx"

export function orderByHeight (payload){
    return {
        type: ORDER_BY_HEIGHT,
        payload
    }
}
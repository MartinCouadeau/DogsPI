import { ORDER_BY_HEIGHT } from "./type"

export function orderByHeight (payload){
    return {
        type: ORDER_BY_HEIGHT,
        payload
    }
}
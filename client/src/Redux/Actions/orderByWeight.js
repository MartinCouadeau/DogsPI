import { ORDER_BY_WEIGHT } from "./type"


export function orderByWeight (payload){
    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
}

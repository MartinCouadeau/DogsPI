import { 
    GET_BREEDS, 
    GET_BREED_NAME,
    GET_TEMPERAMENTS, 
    ADD_BREED,
    UPDATE_BREED,
    SEARCH_BREED,
    GET_DETAIL,
    EMPTY_DETAIL,
    DELETE_BREED,
    FILTER_BY_CREATED,
    FILTER_BY_TEMPERAMENT,
    RESET_FILTER,
    ORDER_BY_WEIGHT,
    ORDER_BY_HEIGHT,
    ORDER_BY_NAME,
    RESET_ORDER,
    UPDATE_CHANGE,
    SET_ACTUAL_PAGE,
    SET_CURRENT_BUTTONS
} from "../Actions/type.jsx"


const initialState = {
    breeds: [],
    searchBreeds: false,
    foundBreeds: [],
    allBreeds: [],
    temperaments: [],
    detail: [],
    currentPage: 1,
    currentButtons: [],
    update: false,
    searchBar: "",
    filterName: "",
    orderName: ""
}


export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case GET_BREEDS:
            return {
                ...state,
                breeds: action.payload,
                allBreeds : action.payload
            }
            break;
        case GET_BREED_NAME:
            
            break;
        case GET_TEMPERAMENTS:
            
            break;
        case ADD_BREED:
            
            break;
        case UPDATE_BREED:
            
            break;
        case SEARCH_BREED:
            
            break;
        case GET_DETAIL:
            
            break;
        case EMPTY_DETAIL:
            
            break;
        case DELETE_BREED:
            
            break;
        case FILTER_BY_CREATED:
            
            break;
        case FILTER_BY_TEMPERAMENT:
            
            break;
        case RESET_FILTER:
            
            break;
        case ORDER_BY_WEIGHT:
            
            break;
        case ORDER_BY_HEIGHT:
            
            break;
        case ORDER_BY_NAME:
            
            break;
        case RESET_ORDER:
            
            break;
        case UPDATE_CHANGE:
            
            break;
        case SET_ACTUAL_PAGE:
            
            break;
        case SET_CURRENT_BUTTONS:
            
            break;
        default:
            break;
    }
}
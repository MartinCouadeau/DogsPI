import { 
    GET_BREEDS, 
    GET_BREED_NAME,
    GET_TEMPERAMENTS, 
    GET_DETAIL,
    EMPTY_DETAIL,
    FILTER_BY_CREATED,
    FILTER_BY_TEMPERAMENT,
    RESET_FILTER,
    ORDER_BY_WEIGHT,
    ORDER_BY_NAME,
    RESET_ORDER,
    UPDATE_CHANGE,
    ADD_BREED
} from "../Actions/type.jsx"


const initialState = {
    breeds: [],
    allBreeds: [],
    breedsFilter: [],
    temperaments: [],
    detail: [],
    currentPage: 1,
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

        case GET_BREED_NAME:
            return {
                ...state,
                breeds: action.payload
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case EMPTY_DETAIL:
            return{
                ...state,
                detail: action.payload
            }

        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }

        case ADD_BREED:
            return {
                ...state,
                breeds: [...state.breeds, action.payload]
            }
        
        case FILTER_BY_CREATED:
            const allBreeds = state.allBreeds
            const filteredBreeds = action.payload === "created" ? allBreeds.filter((breed) => 
                breed.createInDb
            ) : allBreeds.filter((breed) => !breed.createInDb)
            return {
                ...state,
                breeds: action.payload === "All" ? state.allBreeds : filteredBreeds,
                breedsFilter: action.payload === "All" ? state.allBreeds : filteredBreeds
            }

        case FILTER_BY_TEMPERAMENT:
            if (state.breeds.length < state.breedsFilter.length) {
                return {
                    ...state,
                    breeds: state.breedsFilter
                }
            }
            const filteredTemperaments = state.breeds.filter((d) => 
                d.temperament?.includes(action.payload) ? d : null
            )
            return {
               ...state,
                breeds: filteredTemperaments
            }

        case RESET_FILTER:
            
            break;

        case ORDER_BY_WEIGHT:
            const sortedWeight= action.payload === 'MinWeight' ?
                state.breeds.sort(function (a,b){
                    if(parseInt(a.min_weight) > parseInt(b.min_weight)){
                        return 1
                    }
                    if(parseInt(a.min_weight) < parseInt(b.min_weight)){
                        return -1
                    }
                    return 0
                }): 
                state.breeds.sort(function (a,b){
                    if(parseInt(a.max_weight) > parseInt(b.max_weight)){
                        return -1
                    }
                    if(parseInt(a.max_weight) < parseInt(b.max_weight)){
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                breeds: sortedWeight,
            }

        case ORDER_BY_NAME:
            const sortedName =
            action.payload === 'A-Z'
                ? state.breeds.sort(function (a, b) {
                        if (a.name > b.name) return 1;
                        if (b.name > a.name) return -1;
                        return 0;
                  })
                : state.breeds.sort(function (a, b) {
                        if (a.name > b.name) return -1;
                        if (b.name > a.name) return 1;
                        return 0;
                  });
            return {
                ...state,
                breeds: sortedName,
            }

        case RESET_ORDER:
            
            break;

        case UPDATE_CHANGE:
            
            break;

        default:
            return state
    }
}
                        
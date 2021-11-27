import {GET_CATEGORIES_FAILURE, GET_CATEGORIES_LOADING, GET_CATEGORIES_SUCCESS} from '../Actions/categories.actions';

const initialState = {
    gettingCategories: false,
    categoriesData: []
}

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES_LOADING:
            return {
                ...state,
                gettingCategories: true
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                gettingCategories: false,
                categoriesData: action.payload
            }
        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                gettingCategories: false,
            }
        default:
            return state
    }
}
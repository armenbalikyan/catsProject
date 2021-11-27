import { GET_CATS_LOADING, GET_CATS_SUCCESS, GET_CATS_FAILURE } from '../Actions/cats.actions';

const initialState = {
    gettingCats: false,
    catsData: []
}

export default function catsReducer (state = initialState, action){
    switch (action.type){
        case GET_CATS_LOADING:
            return {
                ...state,
                gettingCats: true
            }
        case GET_CATS_SUCCESS:
            return{
                ...state,
                gettingCats: false,
                catsData:  action.payload
            }
        case GET_CATS_FAILURE:
            return{
                ...state,
                gettingCats: false,
            }
        default:
            return state
    }
}
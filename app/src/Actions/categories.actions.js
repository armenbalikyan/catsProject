export const GET_CATEGORIES_LOADING = 'GET_CATEGORIES_LOADING';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';


export const getCategoriesLoading = {
    type: GET_CATEGORIES_LOADING
};

export const getCategoriesSuccess = (data) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: data,
});

export const getCategoriesFailure = {
    type: GET_CATEGORIES_FAILURE,
};

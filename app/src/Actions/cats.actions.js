export const GET_CATS_LOADING = 'GET_CATS_LOADING';
export const GET_CATS_SUCCESS = 'GET_CATS_SUCCESS';
export const GET_CATS_FAILURE = 'GET_CATS_FAILURE';


export const getCatsLoading = (categoryId) =>({
    type: GET_CATS_LOADING,
    categoryId : categoryId,
});

export const getCatsSuccess = (data) => ({
    type: GET_CATS_SUCCESS,
    payload: data,
});

export const getCatsFailure = {
    type: GET_CATS_FAILURE,
};

import axios from 'axios';

export const CATEGORIES_ENDPOINT = "https://api.thecatapi.com/v1/categories";
export const CATS_ENDPOINT = "https://api.thecatapi.com/v1/images/search";

export const getCategories = () => {
    return axios.get(CATEGORIES_ENDPOINT);
};

export const getCats = (categoryId, page = 1) => {
    let params = {
        params: {
            limit: 10,
            page: page,
            category_ids: categoryId
        }
    };
    return axios.get(CATS_ENDPOINT, params);
};
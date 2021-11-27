import axios from 'axios';

//array api
export const CATEGORIES_ENDPOINT = "https://api.thecatapi.com/v1/categories";
export const CATS_ENDPOINT = "https://api.thecatapi.com/v1/images/search";


//main api


//getter function
export const getCategories = () => {
    return axios.get(CATEGORIES_ENDPOINT);
};

export const getCats = (categoryId,limit = 10, page = 1) => {
    let params = {
        params: {
            limit: limit,
            page: page,
            category_ids: categoryId
        }
    };
    return axios.get(CATS_ENDPOINT, params);
};

// getCats().then((response) => console.log("\n\n\n" + JSON.stringify(response) + "\n\n\n"))
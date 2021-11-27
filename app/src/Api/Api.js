
import axios from 'axios';

//array api
export const categories = "https://api.thecatapi.com/v1/categories";
export const catsApi = "https://jsonplaceholder.typicode.com/users";

//main api
export const url = "https://robohash.org/";


//getter function
export const getCategories = () => {
   return axios.get(categories);
};
console.log('Barev');
import {createSelector} from "reselect";

const getData = (state) => state.categories;
const getCategoriesData = createSelector(getData, (data) => data.categoriesData);


const mapCategory = (category) => {
    return {
        id: category.id,
        name: category.name
    }
}

export const categoriesNames = createSelector(
    getCategoriesData,
    (categoriesData) => {
        return categoriesData.map(mapCategory);
    }
);

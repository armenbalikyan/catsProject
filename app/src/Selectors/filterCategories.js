import { createSelector } from "reselect";

const getData = (state) => state.categories;
const getCategoriesData = createSelector(getData, (data) => data.categoriesData);

export const categoriesNames = createSelector(
  getCategoriesData,
  (categoriesData) => {
      console.log(categoriesData);
    return categoriesData.map((categorie) => categorie.name);
  }
);

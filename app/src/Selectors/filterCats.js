import {createSelector} from "reselect";

const getData = (state) => state.cats;
const getCatsData = createSelector(getData, (data) => data.catsData);

const mapCat = (cat) => {
    return {
        photoUrl: cat.url,
        key: cat.id
    }
}

export const mappedCats = createSelector(
    getCatsData,
    (catsData) => {
        return catsData.map(mapCat);
    }
);



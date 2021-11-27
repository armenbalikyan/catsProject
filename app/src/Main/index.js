import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import { connect } from "react-redux";
import { getCategoriesLoading } from "../Actions/categories.actions";
import { categoriesNames } from "../Selectors/filterCategories";
import Content from "../Components/Content";
import {deprecate} from "@testing-library/jest-dom/dist/utils";
import {getCatsLoading} from "../Actions/cats.actions";
import {catsNames} from "../Selectors/filterCats";
import {getCats} from "../Api/Api";
import {id} from "../Components/Link";

let iddf;
const Main = ({ categories, cats, getCategoriesLoading, getCatsLoading, loading }) => {
  const [selectedCategoryId,setSelectedCategoryId] = useState(undefined);
  useEffect(() => {
    getCategoriesLoading();
  }, []);
  useEffect(()=>{
    getCatsLoading();
  },[selectedCategoryId]);

  const handleCategoryClick = (selectedCategoryId) => {
    iddf = selectedCategoryId;
    setSelectedCategoryId(selectedCategoryId);
  }

  return (
    <div>
      <Header />
        <Content categories={categories} cats={cats} handleCategoryClick={handleCategoryClick}/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  categories: categoriesNames(state),
  cats: catsNames(state),
  // loading: state.users.gettingUser
});

const mapDispatchToProps = (dispatch) => ({
  getCategoriesLoading: () => dispatch(getCategoriesLoading),
  getCatsLoading: () => dispatch(getCatsLoading),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

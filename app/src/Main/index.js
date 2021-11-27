import React, { useEffect } from "react";
import Header from "../Components/Header";
import LinkList from "../Components/LinkList";
import { connect } from "react-redux";
import { getCategoriesLoading } from "../Actions/categories.actions";
import { categoriesNames } from "../Selectors/filterCategories";
import Content from "../Components/Content";

const Main = ({ categories, getCategoriesLoading, loading }) => {
  useEffect(() => {
    getCategoriesLoading();
  }, []);
  console.log(categories);
  return (
    <div>
      <Header />
        <Content categories={categories}/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  categories: categoriesNames(state),
  // loading: state.users.gettingUser
});

const mapDispatchToProps = (dispatch) => ({
  getCategoriesLoading: () => dispatch(getCategoriesLoading),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

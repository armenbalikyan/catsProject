import React from "react";
import Link from "./Link";
import {getCats} from "../Api/Api";

const CategoriesLinkList = ({ categories, handleCategoryClick}) => {
    const handleClick = (id) => {
        getCats(id);
    }
  return (
    <div className="container">
        <ul>
        {categories &&
        categories.map((category) => {
            return (
                <Link category={category} handleCategoryClick={handleCategoryClick} />
            )
        })}
        </ul>
    </div>
  );
};

export default CategoriesLinkList;

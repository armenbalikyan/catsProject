import React from "react";
import Link from "./Link";

const CategoriesLinkList = ({categories, handleCategoryClick}) => {
    return (
        <div className="container">
            <ul>
                {categories &&
                categories.map((category) => {
                    return (
                        <Link category={category} handleCategoryClick={handleCategoryClick}/>
                    )
                })}
            </ul>
        </div>
    );
};

export default CategoriesLinkList;

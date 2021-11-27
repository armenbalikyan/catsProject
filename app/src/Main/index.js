import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesLoading} from "../Actions/categories.actions";
import {mappedCategories} from "../Selectors/filterCategories";
import Content from "../Components/Content";
import {getCatsLoading} from "../Actions/cats.actions";
import {mappedCats} from "../Selectors/filterCats";

const Main = () => {
    const categories = useSelector(state => mappedCategories(state));
    const newCats = useSelector(state => mappedCats(state));
    const dispatch = useDispatch();
    const [selectedCategoryId, setSelectedCategoryId] = useState(undefined);
    const [cats, setCats] = useState(undefined);
    const [pageCounter, setPageCounter] = useState(1);

    useEffect(() => {
        dispatch(getCategoriesLoading)
    }, []);
    useEffect(() => {
        dispatch(getCatsLoading());
    }, []);

    const handleCategoryClick = (selectedCategoryId) => {
        setSelectedCategoryId(selectedCategoryId);
        dispatch(getCatsLoading(selectedCategoryId));
        setCats(newCats)
    }

    const handleLoadMoreClick = () => {
        dispatch(getCatsLoading(selectedCategoryId, pageCounter));
        setPageCounter(pageCounter + 1);
        if (cats) {
            setCats([...cats, ...newCats])
        } else {
            setCats(newCats);
        }
    }

    return (
        <div>
            <Header/>
            <Content categories={categories} cats={cats ? cats : newCats} handleCategoryClick={handleCategoryClick}
                     handleLoadMoreClick={handleLoadMoreClick}/>
        </div>
    );
};


export default Main;

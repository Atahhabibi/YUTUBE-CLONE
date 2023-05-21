import React, { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";


export const Context=createContext();

export const AppContext=(props)=>{

    const[loading,setLoading]=useState(false);
    const[searchResults,setSearchResults]=useState(null);
    const[selectCategories,setSelectCategories]=useState("New");
    const[mobileMenu,setMobileMenu]=useState(false);
    

    useEffect(()=>{
        fechSelectedCategoryData(selectCategories)
    },[selectCategories])


    const fechSelectedCategoryData=(query)=>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            setLoading(false)
            setSearchResults(contents);
        })

    }


    const contextValue={
        loading,
        searchResults,
        selectCategories,
        mobileMenu,
        setLoading,
        setSearchResults,
        setSelectCategories,
        setMobileMenu,
    }


    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>





}
import React from "react";
import CategoryList from "./CategoryList";
import EventList from "./EventList";
import SearchBar from "./SearchBar";
import { useState } from "react";
import './styles/MainContent.css';

function MainContent()
{
    
    const [searchQuery, setSearchQuery] = useState('');
    return(
        <div className="MainContent">
            <SearchBar/>
            <CategoryList/>
    
            </div> 
    )
}
  
export default MainContent;
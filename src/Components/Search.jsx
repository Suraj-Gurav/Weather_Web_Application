import React, { useRef } from 'react';
import './Search.css';

const Search = (props) => {
   
   const searchRef =useRef();

    return (
        <div className='row'>
            <input type="search" placeholder='Search' className='search' value={props.searchData} 
            onChange={()=>{props.searchCityName(searchRef.current.value)}} ref={searchRef}/>
            <button onClick={props.weatherHandler} className='btn' >Search</button>
        </div>
    );
};

export default Search;
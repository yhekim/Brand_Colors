import React from 'react'
import {GrSearch} from "react-icons/gr";
import MainContext from '../MainContext';


const Search = () => {
    const {search,setSearch}=React.useContext(MainContext);
    return (
        <div className="search">
            <div className="icon">
                <GrSearch/>
            </div>
            <input type="text" onChange={(event)=>setSearch(event.target.value)} style={{fontSize:"18px"}} placeholder="Search Brands..." />
        </div>
    )
}

export default Search;
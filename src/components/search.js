import React from "react";


const SearchBox =(prop)=>{
    return(
<div className="col col-sm-4">
 
 <input className="form-control" placeholder="type here"
 onChange={(event)=>{
    prop.setSearch(event.target.value)
 }}></input>

</div>
    );
};

export default SearchBox;
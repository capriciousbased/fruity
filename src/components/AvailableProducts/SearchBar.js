import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./AvailableProducts.css";

const SearchBar = (props) => {
  return (
    <div className="search_nav">
      <AppBar position="static" color='primary'>
        <Toolbar>
          <input
            className="searchBar"
            position="relative"
            type="text"
            placeholder="Search..."
            onChange={props.onSearch}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchBar;

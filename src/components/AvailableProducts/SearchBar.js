import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./AvailableProducts.css";

const SearchBar = (props) => {
  return (
    <div>
      <AppBar position="static" color="inherit">
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

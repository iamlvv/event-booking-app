import React from "react";
import seachIcon from "../../../assets/img/searchIcon.png";
type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="border item-rounded search-bar">
      <div>
        <input
          type="text"
          placeholder="Search for events"
          className="searchBar input-field"
        />
      </div>
      <div>
        <img src={seachIcon} alt="search icon" className="searchIcon" />
      </div>
    </div>
  );
};

export default SearchBar;

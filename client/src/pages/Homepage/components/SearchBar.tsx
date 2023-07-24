import React, { useRef } from "react";
import seachIcon from "../../../assets/img/searchIcon.png";
import { IEventDetail } from "../../../interface/Interfaces";
import { searchEvent } from "../../../components/actions/eventActions";
type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  setEvents: React.Dispatch<React.SetStateAction<Array<IEventDetail>>>;
};

const SearchBar = (props: Props) => {
  const ref = useRef<any>(null);
  const handleFocus = () => {
    ref.current.focus();
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("searching");
    searchEvent({ searchValue: props.searchTerm, setEvents: props.setEvents });
  };

  return (
    <form
      className="border item-rounded search-bar mb-10"
      onClick={handleFocus}
      onSubmit={handleSearch}
    >
      <div>
        <input
          type="text"
          placeholder="Search for events"
          className="searchBar input-field"
          ref={ref}
          value={props.searchTerm || ""}
          onChange={(e) => props.setSearchTerm(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">
          <img
            src={seachIcon}
            alt="search icon"
            className="searchIcon cursor-pointer"
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

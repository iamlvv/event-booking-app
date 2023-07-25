import React, { useEffect, useRef } from "react";
import seachIcon from "../../../assets/img/searchIcon.png";
import { IEventDetail } from "../../../interface/Interfaces";
import { searchEvent } from "../../../components/actions/eventActions";
type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  setEvents: React.Dispatch<React.SetStateAction<Array<IEventDetail>>>;
  setFilteredEvents: React.Dispatch<React.SetStateAction<Array<IEventDetail>>>;
  filteredEvents: Array<IEventDetail>;
  events: Array<IEventDetail>;
};

const SearchBar = (props: Props) => {
  const ref = useRef<any>(null);

  const handleFocus = () => {
    ref.current.focus();
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchEvent({ searchValue: props.searchTerm, setEvents: props.setEvents });
  };
  const searchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value;
    props.setSearchTerm(searchWord);
    const filteredEvents = props.events.filter((event) => {
      return event.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    props.setFilteredEvents(filteredEvents);
    if (searchWord === "") {
      props.setFilteredEvents(props.events);
    } else {
      props.setFilteredEvents(filteredEvents);
    }
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
          onChange={searchTerm}
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

import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBar from "./components/SearchBar";
import UpcomingEvents from "./components/UpcomingEvents";
import { getAllEvents } from "../../components/actions/eventActions";
import { IEventDetail } from "../../interface/Interfaces";
import Pagination from "./components/Pagination";

type Props = {
  itemsPerPage: number;
};

const Homepage = (props: Props) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [events, setEvents] = React.useState<Array<IEventDetail>>([]);

  useEffect(() => {
    getAllEvents({ setEvents });
  }, []);

  // Create pagination
  var keyCount = Object.keys(events).length;
  const [itemOffset, setItemOffset] = useState<number>(0);
  const endOffset = itemOffset + props.itemsPerPage;
  const currentItems = events.slice().reverse().slice(itemOffset, endOffset);
  const pageCount: number = Math.ceil(keyCount / props.itemsPerPage);
  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * props.itemsPerPage) % keyCount;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-center text-5xl mt-20 mb-10">
          welcome to eventscape
        </h1>
        <h2 className="text-center text-4xl mb-10">find your event here!</h2>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setEvents={setEvents}
        />
        <UpcomingEvents events={currentItems} />
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

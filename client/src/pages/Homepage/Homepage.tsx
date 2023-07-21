import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBar from "./components/SearchBar";
import UpcomingEvents from "./components/UpcomingEvents";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="text-center text-5xl">welcome to eventscape</h1>
        <h2 className="text-center text-4xl">find your event here!</h2>
        <SearchBar />
        <UpcomingEvents />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

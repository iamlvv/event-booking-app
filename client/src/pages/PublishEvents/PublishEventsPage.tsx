import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UnPublishedEvents from "./components/UnPublishedEvents";

type Props = {};

const PublishEventsPage = (props: Props) => {
  return (
    <div>
      <Header />
      <div>
        <h2>these are events that have not been published</h2>
        <UnPublishedEvents />
      </div>
      <Footer />
    </div>
  );
};

export default PublishEventsPage;

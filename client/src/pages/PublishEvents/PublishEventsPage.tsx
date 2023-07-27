import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UnPublishedEvents from "./components/UnPublishedEvents";

type Props = {};

const PublishEventsPage = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="mb-20 min-h-screen">
        <UnPublishedEvents />
      </div>
      <Footer />
    </div>
  );
};

export default PublishEventsPage;

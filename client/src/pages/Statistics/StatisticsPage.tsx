import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Props = {};

const StatisticsPage = (props: Props) => {
  return (
    <div>
      <Header />
      <h1 className="text-4xl text-center mt-20 mb-10">Statistics</h1>
      <div className="min-h-screen"></div>
      <Footer />
    </div>
  );
};

export default StatisticsPage;

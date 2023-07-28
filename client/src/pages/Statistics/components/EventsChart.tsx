import React, { useEffect, useState } from "react";
import { IEventDetail } from "../../../interface/Interfaces";
import { getTop5Events } from "../../../components/actions/eventActions";
import Graph from "./Graph";

type Props = {};

const EventsChart = (props: Props) => {
  const [events, setEvents] = useState<Array<IEventDetail>>([]);

  useEffect(() => {
    getTop5Events({ setEvents });
  }, []);
  console.log(events);
  return (
    <div>
      <h2>Top 5 events have been booking the most:</h2>
      <div className="my-10 flex justify-center">
        <Graph data={events.slice().reverse()} />
      </div>
    </div>
  );
};

export default EventsChart;

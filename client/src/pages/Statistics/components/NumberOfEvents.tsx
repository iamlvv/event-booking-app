import React, { useEffect, useState } from "react";
import { getNumberOfEvents } from "../../../components/actions/eventActions";

type Props = {};

const NumberOfEvents = (props: Props) => {
  const [numberOfEvents, setNumberOfEvents] = useState<number>(0);
  useEffect(() => {
    getNumberOfEvents({ setNumberOfEvents });
  }, []);
  return (
    <div>
      <h2>Number of events in this system: {numberOfEvents}</h2>
    </div>
  );
};

export default NumberOfEvents;

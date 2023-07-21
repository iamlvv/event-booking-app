import React from "react";
import EventItem from "./EventItem";
import eventDetail from "../../../components/eventDetail.json";

type Props = {};

const UpcomingEvents = (props: Props) => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <EventItem
        eventName={eventDetail.name}
        src="https://picsum.photos/383/153"
        location={eventDetail.location}
        startDate={eventDetail.startDate}
        seatsLeft={eventDetail.seatsRemain}
        alt="event"
      />
    </div>
  );
};

export default UpcomingEvents;

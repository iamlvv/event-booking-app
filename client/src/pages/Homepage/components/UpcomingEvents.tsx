import React from "react";
import EventItem from "./EventItem";
import { IEventDetail } from "../../../interface/Interfaces";

type Props = {
  events: IEventDetail[];
};

const UpcomingEvents = (props: Props) => {
  return (
    <div>
      <h2 className="text-2xl mb-10">Upcoming Events</h2>
      <div className="grid grid-cols-3 gap-x-10 mb-20">
        {props.events.map((event) => (
          <EventItem
            key={event._id}
            eventName={event.name}
            startDate={event.startDate}
            seatsLeft={event.seatsRemain}
            location={event.location}
            alt="event"
            src="https://picsum.photos/383/153"
            id={event._id}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;

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
      <div className="grid grid-cols-3 mb-20">
        {props.events.length > 0 ? (
          props.events.map((event) => (
            <EventItem
              key={event._id}
              eventName={event.name}
              startDate={new Date(event.startDate).toLocaleString()}
              seatsLeft={event.seatsRemain}
              location={event.location}
              alt="event"
              src={event.image.url}
              id={event._id}
              description={event.description}
            />
          ))
        ) : (
          <div className=" text-red-500 text-2xl">No result found.</div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;

import EventItem from "./EventItem";
import { IEventDetail } from "../../../interface/Interfaces";
import ReactLoading from "react-loading";

type Props = {
  events: IEventDetail[];
};

const UpcomingEvents = (props: Props) => {
  return (
    <div>
      <h2 className="text-2xl mb-10">Upcoming Events</h2>
      <div className="grid grid-cols-3 mb-20 gap-10">
        {props.events.length > 0 ? (
          props.events
            .filter((event) => event.isPublished === true)
            .map((event) => (
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
          <ReactLoading
            type={"spin"}
            color={"red"}
            height={100}
            width={100}
            className="mx-auto"
          />
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;

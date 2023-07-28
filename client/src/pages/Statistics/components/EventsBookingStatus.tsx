import { useEffect, useState } from "react";
import { IEventDetail } from "../../../interface/Interfaces";
import {
  getEventsWithSeats,
  getSoldOutEvents,
} from "../../../components/actions/eventActions";

type Props = {};

const EventsBookingStatus = (props: Props) => {
  const [eventsSoldOut, setEventsSoldOut] = useState<Array<IEventDetail>>([]);
  const [eventsStillHaveSeats, setEventsStillHaveSeats] = useState<
    Array<IEventDetail>
  >([]);
  const [numberOfEventsSoldOut, setNumberOfEventsSoldOut] = useState<number>(0);
  const [numberOfEventsStillHaveSeats, setNumberOfEventsStillHaveSeats] =
    useState<number>(0);

  useEffect(() => {
    getSoldOutEvents({
      setEventsSoldOut,
      setNumberOfSoldOutEvents: setNumberOfEventsSoldOut,
    });
    getEventsWithSeats({
      setEventsStillHaveSeats,
      setNumberOfEventsStillHaveSeats: setNumberOfEventsStillHaveSeats,
    });
  }, []);
  console.log(eventsSoldOut);
  return (
    <div className="grid grid-cols-2 gap-x-10 my-10">
      <div>
        <h2 className="mb-5">
          events have been sold out: {numberOfEventsSoldOut}
        </h2>
        {numberOfEventsSoldOut > 0 ? (
          <div className="border item-rounded p-5 hover:scroll-auto lists overflow-y-scroll">
            {eventsSoldOut.map((event) => (
              <div
                key={event._id}
                className="flex flex-row gap-x-5 items-center"
              >
                <div>
                  <img
                    src={event.image ? event.image.url : ""}
                    alt="event"
                    width={100}
                  />
                </div>
                <div>
                  <p>{event.name}</p>
                  <p>{event.location}</p>
                  <p>{new Date(event.startDate).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <h2 className="mb-5">
          events still have seats: {numberOfEventsStillHaveSeats}
        </h2>
        {numberOfEventsStillHaveSeats > 0 ? (
          <div className="border item-rounded px-2 hover:scroll-auto lists overflow-y-scroll flex flex-col gap-y-5">
            {eventsStillHaveSeats.map((event) => (
              <div
                key={event._id}
                className="flex flex-row gap-x-5 items-center hover:bg-gray-50 item-rounded p-5"
              >
                <div>
                  <img
                    src={event.image ? event.image.url : ""}
                    alt="event"
                    width={100}
                  />
                </div>
                <div>
                  <p>{event.name}</p>
                  <p>{event.location}</p>
                  <p>{new Date(event.startDate).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EventsBookingStatus;

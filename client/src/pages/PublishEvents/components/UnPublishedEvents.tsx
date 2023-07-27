import React, { useEffect, useState } from "react";
import { IEventDetail } from "../../../interface/Interfaces";
import { getUnpublishedEvents } from "../../../components/actions/eventActions";
import UnPublishedEventItem from "./UnPublishedEventItem";

type Props = {};

const UnPublishedEvents = (props: Props) => {
  const [originalEventsList, setOriginalEventsList] = useState<
    Array<IEventDetail>
  >([]); // [1
  const [unPublishedEvents, setUnPublishedEvents] = useState<
    Array<IEventDetail>
  >([]);
  const [typeOfEvents, setTypeOfEvents] = React.useState<string>("all");

  const [numberOfUnPublishedEvents, setNumberOfUnPublishedEvents] =
    useState<number>(0);
  useEffect(() => {
    // get all unpublished events
    getUnpublishedEvents({
      setUnPublishedEvents,
      setNumberOfUnPublishedEvents,
      setOriginalEventsList,
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl my-10">Manage all events here</h1>
      <div className="flex flex-row gap-x-10 my-10">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setTypeOfEvents("all");
            setUnPublishedEvents(originalEventsList);
          }}
        >
          All
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setTypeOfEvents("unpublished");
            setUnPublishedEvents(
              originalEventsList.filter((event) => {
                return event.isPublished === false;
              })
            );
          }}
        >
          Unpublished
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setTypeOfEvents("published");
            setUnPublishedEvents(
              originalEventsList.filter((event) => {
                return event.isPublished === true;
              })
            );
          }}
        >
          Published
        </button>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {unPublishedEvents.map((event) => {
          return (
            <div key={event._id}>
              <UnPublishedEventItem event={event} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UnPublishedEvents;

import React, { useEffect, useState } from "react";
import { IEventDetail } from "../../../interface/Interfaces";
import { getUnpublishedEvents } from "../../../components/actions/eventActions";
import UnPublishedEventItem from "./UnPublishedEventItem";
import {
  NAVIGATION_BUTTON_ACTIVE,
  NAVIGATION_BUTTON_INACTIVE,
} from "../../../constants/navigationConstants";
import ReactLoading from "react-loading";

type Props = {
  itemsPerPage: number;
};

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
          className={
            typeOfEvents === "all"
              ? NAVIGATION_BUTTON_ACTIVE
              : NAVIGATION_BUTTON_INACTIVE
          }
          onClick={() => {
            setTypeOfEvents("all");
            setUnPublishedEvents(originalEventsList);
          }}
        >
          All
        </button>
        <button
          type="button"
          className={
            typeOfEvents === "unpublished"
              ? NAVIGATION_BUTTON_ACTIVE
              : NAVIGATION_BUTTON_INACTIVE
          }
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
          className={
            typeOfEvents === "published"
              ? NAVIGATION_BUTTON_ACTIVE
              : NAVIGATION_BUTTON_INACTIVE
          }
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
      <div className="grid grid-cols-3 gap-10 published-events-content">
        {unPublishedEvents.length > 0 ? (
          unPublishedEvents.map((event) => {
            return (
              <div key={event._id}>
                <UnPublishedEventItem event={event} />
              </div>
            );
          })
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

export default UnPublishedEvents;

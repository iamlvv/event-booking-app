import React, { useEffect, useState } from "react";
import { IEventDetail } from "../../../interface/Interfaces";
import { getUnpublishedEvents } from "../../../components/actions/eventActions";
import UnPublishedEventItem from "./UnPublishedEventItem";

type Props = {};

const UnPublishedEvents = (props: Props) => {
  const [unPublishedEvents, setUnPublishedEvents] = useState<
    Array<IEventDetail>
  >([]);
  const [numberOfUnPublishedEvents, setNumberOfUnPublishedEvents] =
    useState<number>(0);
  useEffect(() => {
    // get all unpublished events
    getUnpublishedEvents({
      setUnPublishedEvents,
      setNumberOfUnPublishedEvents,
    });
  }, []);

  return (
    <div>
      {unPublishedEvents.map((event) => {
        return (
          <div>
            <UnPublishedEventItem event={event} />
          </div>
        );
      })}
    </div>
  );
};

export default UnPublishedEvents;

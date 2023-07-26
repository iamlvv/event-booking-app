import React from "react";
import { IEventDetail } from "../../../interface/Interfaces";
import { publishAnEvent } from "../../../components/actions/eventActions";

type Props = {
  event: IEventDetail;
};

const UnPublishedEventItem = (props: Props) => {
  const handlePublishEvent = (id: string) => {
    publishAnEvent({ id });
  };
  return (
    <div className="flex flex-row gap-x-5 items-center">
      <div>
        <img
          src={props.event.image ? props.event.image.url : ""}
          alt="profile"
        />
      </div>
      <div>
        <div>{props.event.name}</div>
        <div>{new Date(props.event.startDate).toLocaleString()}</div>
        <div>{props.event.location}</div>
        <div>{props.event.description}</div>
      </div>
      <div
        className="item-rounded button heading"
        onClick={() => handlePublishEvent(props.event._id)}
      >
        publish
      </div>
    </div>
  );
};

export default UnPublishedEventItem;

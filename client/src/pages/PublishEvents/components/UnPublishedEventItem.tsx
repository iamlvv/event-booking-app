import React from "react";
import { IEventDetail } from "../../../interface/Interfaces";
import { publishAnEvent } from "../../../components/actions/eventActions";

type Props = {
  event: IEventDetail;
};

const UnPublishedEventItem = (props: Props) => {
  console.log(props.event);
  const handlePublishEvent = (id: string) => {
    publishAnEvent({ id });
  };
  return (
    <div className="border item-rounded event-item hover:shadow-md transition ease-in-out">
      <div className="image-div flex justify-center">
        <img src={props.event.image.url} alt="event" className="img-rounded" />
      </div>
      <div className="flex flex-row justify-between p-5">
        <div className="flex flex-col gap-y-5">
          <div>{props.event.name}</div>
          <div>{props.event.startDate}</div>
        </div>
        <div className="flex flex-col items-center gap-y-10">
          <div>{props.event.location}</div>
          {!props.event.isPublished ? (
            <div
              className="button p-5 item-rounded cursor-pointer"
              onClick={() => handlePublishEvent(props.event._id)}
            >
              Publish
            </div>
          ) : (
            <div className="p-5">Published</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnPublishedEventItem;

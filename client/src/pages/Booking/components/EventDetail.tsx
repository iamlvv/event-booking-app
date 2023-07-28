import React, { useState } from "react";
import { IEventDetail } from "../../../interface/Interfaces";

type Props = {
  eventDetail: IEventDetail;
};

const EventDetail = (props: Props) => {
  return (
    <div className="flex flex-row gap-x-5">
      <div>
        <img
          src={props.eventDetail.image ? props.eventDetail.image.url : ""}
          alt="profile"
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <div>Event name: {props.eventDetail.name}</div>
        <div>
          Start Date: {new Date(props.eventDetail.startDate).toLocaleString()}
        </div>
        <div>Location: {props.eventDetail.location}</div>
        <div>Description: {props.eventDetail.description}</div>
      </div>
    </div>
  );
};

export default EventDetail;

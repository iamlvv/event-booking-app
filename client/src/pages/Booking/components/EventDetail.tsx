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
          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
          alt="profile"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <div>{props.eventDetail.name}</div>
        <div>{props.eventDetail.startDate}</div>
        <div>{props.eventDetail.location}</div>
        <div>{props.eventDetail.description}</div>
      </div>
    </div>
  );
};

export default EventDetail;

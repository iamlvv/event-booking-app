import React from "react";
import { ISeatDetail } from "../../../interface/Interfaces";

type Props = {
  eventName: string;
  startDate: string;
  location: string;
  seatReserved: Array<ISeatDetail>;
  totalPrice: number;
};

const EventDetailConfirm = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-x-5">
      <div className="heading col-span-1 flex flex-col gap-y-4">
        <div>event name:</div>
        <div>start date:</div>
        <div>location:</div>
        <div>seat reserved:</div>
        <div>total price:</div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div>{props.eventName}</div>
        <div>{new Date(props.startDate).toLocaleString()}</div>
        <div>{props.location}</div>
        <div className="flex flex-row gap-x-2">
          {props.seatReserved.length !== 0 ? (
            props.seatReserved.map((seat: ISeatDetail) => (
              <div key={seat.seatName}>{seat.seatName}</div>
            ))
          ) : (
            <div>no seat reserved</div>
          )}
        </div>
        <div>{props.totalPrice}</div>
      </div>
    </div>
  );
};

export default EventDetailConfirm;

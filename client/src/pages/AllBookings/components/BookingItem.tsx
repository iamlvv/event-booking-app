import React from "react";
import { IBookingDetail } from "../../../interface/Interfaces";

type Props = {
  booking: Array<IBookingDetail>;
};

const BookingItem = (props: Props) => {
  return (
    <div>
      {props.booking.map((booking) => (
        <div className="flex flex-row justify-center gap-x-10 items-center">
          <div>
            <img src="https://picsum.photos/383/153" alt="event" />
          </div>
          <div className="heading col-span-1 flex flex-col gap-y-4">
            <div>event name:</div>
            <div>start date:</div>
            <div>location:</div>
            <div>attendant's name:</div>
            <div>seat reserved:</div>
            <div>total price:</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingItem;

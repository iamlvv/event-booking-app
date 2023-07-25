import React from "react";
import { IBookingDetail } from "../../../interface/Interfaces";

type Props = {
  booking: IBookingDetail;
};

const BookingItem = (props: Props) => {
  return (
    <div>
      <div className="flex flex-row justify-center gap-x-10 items-center border item-rounded p-5 mt-10">
        <div>
          <img src="https://picsum.photos/383/153" alt="event" />
        </div>
        <div className="heading col-span-1 flex flex-col gap-y-4">
          <div>event name: {props.booking.event.name}</div>
          <div>
            start date:{" "}
            {new Date(props.booking.event.startDate).toLocaleString()}
          </div>
          <div>location: {props.booking.event.location}</div>
          <div>attendant's name: {props.booking.bookerName}</div>
          <div>
            seat reserved:{" "}
            {props.booking.seatName.map((seat) => {
              return seat + " ";
            })}
          </div>
          <div>total price: {props.booking.bookingPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default BookingItem;

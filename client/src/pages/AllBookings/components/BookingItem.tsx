import React from "react";

type Props = {
  booking: any;
};

const BookingItem = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-5">
        <div className="heading col-span-1 flex flex-col gap-y-4">
          <div>event name:</div>
          <div>start date:</div>
          <div>location:</div>
          <div>attendant's name:</div>
          <div>seat reserved:</div>
          <div>total price:</div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>event name</div>
          <div>start date</div>
          <div>location</div>
          <div>attendant's name</div>
          <div>seat reserved</div>
          <div>total price</div>
        </div>
      </div>
    </div>
  );
};

export default BookingItem;

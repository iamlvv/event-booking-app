import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  src: string;
  alt: string;
  eventName: string;
  startDate: string;
  seatsLeft: number;
  location: string;
  id: string;
  description: string;
};

const EventItem = (props: Props) => {
  const navigate = useNavigate();
  const handleBookingEvent = () => {
    if (props.seatsLeft === 0) return;
    navigate(`/booking/${props.id}`);
  };
  return (
    <div className="border item-rounded event-item hover:shadow-md transition ease-in-out">
      <div className="image-div flex justify-center">
        <img src={props.src} alt={props.alt} className="img-rounded" />
      </div>
      <div className="flex flex-row justify-between p-5">
        <div className="flex flex-col gap-y-5">
          <div>{props.eventName}</div>
          <div>{props.startDate}</div>
          <div>{props.seatsLeft} seats left</div>
        </div>
        <div className="flex flex-col items-center gap-y-10">
          <div>{props.location}</div>
          <div
            className={
              props.seatsLeft === 0
                ? "button p-5 item-rounded bg-gray-300 cursor-not-allowed"
                : "button p-5 item-rounded cursor-pointer"
            }
            onClick={handleBookingEvent}
          >
            Book now
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;

import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  src: string;
  alt: string;
  eventName: string;
  startDate: string;
  seatsLeft: number;
  location: string;
};

const EventItem = (props: Props) => {
  const navigate = useNavigate();
  const handleBookingEvent = () => {
    navigate("/booking");
  };
  return (
    <div className="border item-rounded event-item">
      <div>
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
          <div className="button p-5 item-rounded">
            <button type="button" onClick={handleBookingEvent}>
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;

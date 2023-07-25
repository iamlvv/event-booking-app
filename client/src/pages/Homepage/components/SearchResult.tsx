import React from "react";
import { IEventDetail } from "../../../interface/Interfaces";
import { useNavigate } from "react-router-dom";

type Props = {
  searchTerm: string;
  filteredEvents: Array<IEventDetail>;
};

const SearchResult = (props: Props) => {
  const navigate = useNavigate();
  const handleBooking = (id: string) => {
    navigate(`/booking/${id}`);
  };
  return (
    <div className="absolute bg-white search-result select-none">
      <div className="flex flex-col gap-y-5">
        {props.filteredEvents.length > 0 ? (
          props.filteredEvents.slice(0, 3).map((event) => (
            <div
              className="flex flex-row gap-x-5 items-center justify-between hover:bg-gray-50 item-rounded p-5"
              key={event._id}
            >
              <div>
                <img
                  width={100}
                  height={100}
                  src="https://picsum.photos/383/153"
                  alt="event"
                />
              </div>
              <div>
                <h2 className="text-2xl">{event.name}</h2>
                <p>{event.location}</p>
                <p>{event.startDate}</p>
              </div>
              <div
                className="button p-5 item-rounded cursor-pointer"
                onClick={() => handleBooking(event._id)}
              >
                Book now
              </div>
            </div>
          ))
        ) : (
          <div className="p-5 text-red-500 text-2xl">No result found.</div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;

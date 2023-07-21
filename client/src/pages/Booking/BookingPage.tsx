import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SeatMap from "./components/SeatMap";
import eventDetail from "../../components/eventDetail.json";
import { ISeatDetail, ISeatPrice } from "../../interface/Interfaces";
type Props = {};

const BookingPage = (props: Props) => {
  // seatPrices is an object with 3 keys: normal, couple, vip
  const [seatPrices, setSeatPrices] = useState<ISeatPrice>(eventDetail.price);

  const [selectedSeatList, setSelectedSeatList] = useState<Array<ISeatDetail>>(
    []
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Calculate total price when selectedSeatList or seatPrices changes
  useEffect(() => {
    let totalPrice = 0;
    selectedSeatList.forEach((seat) => {
      if (seat.seatType === "n") {
        totalPrice += seatPrices.normal;
      } else if (seat.seatType === "c") {
        totalPrice += seatPrices.couple;
      } else {
        totalPrice += seatPrices.vip;
      }
    });
    setTotalPrice(totalPrice);
  }, [selectedSeatList, seatPrices]);

  return (
    <div>
      <Header />
      <div className="mt-10">
        <div className="flex flex-row justify-between px-20">
          <div className="flex flex-row gap-x-5">
            <div>
              <img
                src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                alt="profile picture"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-y-5">
              <div>{eventDetail.name}</div>
              <div>{eventDetail.startDate}</div>
              <div>{eventDetail.location}</div>
              <div>{eventDetail.description}</div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 item-rounded border shadow-md p-5 booking-status">
            <div className="text-center uppercase font-bold">
              Booking status
            </div>
            <div>
              Seat: {selectedSeatList.map((seat) => seat.seatName + ", ")}
            </div>
            <div>Total price: {totalPrice}</div>
            <div className="button text-center item-rounded p-3 cursor-pointer">
              BOOK!
            </div>
          </div>
        </div>
        <SeatMap
          seatList={eventDetail.seats}
          setSelectedSeatList={setSelectedSeatList}
        />
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;

import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SeatMap from "./components/SeatMap";
import {
  IEventDetail,
  ISeatDetail,
  ISeatPrice,
} from "../../interface/Interfaces";
import { useNavigate, useParams } from "react-router-dom";
import EventDetail from "./components/EventDetail";
import { getEventById } from "../../components/actions/eventActions";
import Swal from "sweetalert2";

type Props = {};

const BookingPage = (props: Props) => {
  const navigate = useNavigate();

  const { id } = useParams();
  // seatPrices is an object with 3 keys: normal, couple, vip
  const [seatPrices, setSeatPrices] = useState<ISeatPrice>({} as ISeatPrice);
  const [seatList, setSeatList] = useState<Array<ISeatDetail>>([]);
  const [eventDetail, setEventDetail] = useState<IEventDetail>(
    {} as IEventDetail
  );
  const [selectedSeatList, setSelectedSeatList] = useState<Array<ISeatDetail>>(
    []
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    getEventById({ id, setEvent: setEventDetail, setSeatList, setSeatPrices });
    // const selectedSeatList = localStorage.getItem("selectedSeatList");
    // if (selectedSeatList) {
    //   setSelectedSeatList(JSON.parse(selectedSeatList));
    // }
  }, []);

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

  const handleBooking = () => {
    if (selectedSeatList.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select at least one seat!",
      });
      return;
    }
    localStorage.setItem("selectedSeatList", JSON.stringify(selectedSeatList));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    navigate(`/booking/${id}/confirm-booking`);
  };

  return (
    <div>
      <Header />
      <div className="mt-10">
        <div className="flex flex-row justify-between px-20">
          <EventDetail eventDetail={eventDetail} />
          <div className="flex flex-col gap-y-5 item-rounded border shadow-md p-5 booking-status">
            <div className="text-center uppercase font-bold">
              Booking status
            </div>
            <div>
              Seat: {selectedSeatList.map((seat) => seat.seatName + " ")}
            </div>
            <div>Total price: {totalPrice}</div>
            <div
              className="button text-center item-rounded p-3 cursor-pointer"
              onClick={handleBooking}
            >
              BOOK!
            </div>
          </div>
        </div>
        <SeatMap
          seatList={seatList}
          setSelectedSeatList={setSelectedSeatList}
        />
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;

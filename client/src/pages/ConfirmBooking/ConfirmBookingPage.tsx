import React, { HTMLAttributes, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ISeatDetail } from "../../interface/Interfaces";
import { useNavigate, useParams } from "react-router-dom";
import { createNewBooking } from "../../components/actions/bookingActions";
import {
  getEventById,
  getEventByIdForBooking,
} from "../../components/actions/eventActions";
import EventDetailConfirm from "./components/EventDetailConfirm";
import UserInput from "./components/UserInput";
import Swal from "sweetalert2";
import { EMAIL_PATTERN } from "../../constants/patternConstants";
type Props = {};

const ConfirmBookingPage = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [eventName, setEventName] = React.useState<string>("");
  const [startDate, setStartDate] = React.useState<string>("");
  const [location, setLocation] = React.useState<string>("");
  const [seatReserved, setSeatReserved] = React.useState<Array<ISeatDetail>>(
    []
  );
  const [totalPrice, setTotalPrice] = React.useState<number>(0);

  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [attendantName, setAttendantName] = React.useState<string>("");

  const [errorEmail, setErrorEmail] = React.useState<string>("");

  const isValidEmail = (email: string) => {
    return EMAIL_PATTERN.test(email);
  };
  const handleChangeEmail = (e: any) => {
    if (!isValidEmail(e.target.value)) {
      setErrorEmail("Invalid email");
    } else setErrorEmail("");
    setEmail(e.target.value);
  };

  useEffect(() => {
    getEventByIdForBooking({ id, setEventName, setStartDate, setLocation });
    setSeatReserved(
      JSON.parse(localStorage.getItem("selectedSeatList") || "[]")
    );
    setTotalPrice(JSON.parse(localStorage.getItem("totalPrice") || "0"));
  }, []);

  const handleConfirmBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createNewBooking({
      bookingPrice: totalPrice,
      eventId: id,
      bookerName: attendantName,
      email,
      phoneNumber,
      seatName: seatReserved.map((seat) => {
        return seat.seatName;
      }),
    });
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <form
          className="form p-5 shadow-md border rounded-md my-20"
          onSubmit={handleConfirmBooking}
        >
          <h1 className="text-4xl text-center mb-5">submit booking</h1>
          <EventDetailConfirm
            eventName={eventName}
            startDate={startDate}
            location={location}
            seatReserved={seatReserved}
            totalPrice={totalPrice}
          />
          <UserInput
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            email={email}
            setEmail={handleChangeEmail}
            attendantName={attendantName}
            setAttendantName={setAttendantName}
            errorEmail={errorEmail}
          />
          <div className="text-center button w-40 m-auto item-rounded p-2 mt-5 text-3xl heading">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmBookingPage;

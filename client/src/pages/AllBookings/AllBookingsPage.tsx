import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookingSearch from "./components/BookingSearch";
import BookingItem from "./components/BookingItem";
import { getBookingByPhoneNumberAndVerificationCode } from "../../components/actions/bookingActions";
import { IBookingDetail } from "../../interface/Interfaces";
type Props = {};

const AllBookingsPage = (props: Props) => {
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [verificationCode, setVerificationCode] = React.useState<string>("");
  const [booking, setBooking] = React.useState<IBookingDetail>(
    {} as IBookingDetail
  ); // [

  const handleSearchBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getBookingByPhoneNumberAndVerificationCode({
      phoneNumber,
      verificationCode,
      setBooking,
    });
  };
  console.log(booking);
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <h1 className="text-4xl text-center mt-20 mb-10">
          Search your bookings here
        </h1>
        <div className="">
          <form
            className="flex flex-row items-center gap-x-5 justify-center"
            onSubmit={handleSearchBooking}
          >
            <BookingSearch
              phoneNumber={phoneNumber}
              verificationCode={verificationCode}
              setPhoneNumber={setPhoneNumber}
              setVerificationCode={setVerificationCode}
            />
            <div className="text-center button w-40 item-rounded p-2 text-2xl heading">
              <button type="submit">Search</button>
            </div>
          </form>
          {booking._id ? <BookingItem booking={booking} /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllBookingsPage;

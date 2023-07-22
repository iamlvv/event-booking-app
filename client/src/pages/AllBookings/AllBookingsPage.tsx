import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookingSearch from "./components/BookingSearch";
import BookingItem from "./components/BookingItem";
type Props = {};

const AllBookingsPage = (props: Props) => {
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [verificationCode, setVerificationCode] = React.useState<string>("");
  const [booking, setBooking] = React.useState<any>([]); // [

  const handleSearchBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(phoneNumber, verificationCode);
  };

  return (
    <div>
      <Header />
      <div>
        <form
          className="flex flex-row items-center gap-x-5"
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
        <BookingItem booking={booking} />
      </div>
      <Footer />
    </div>
  );
};

export default AllBookingsPage;

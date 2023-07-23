import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ISeatDetail } from "../../interface/Interfaces";
type Props = {};

const ConfirmBookingPage = (props: Props) => {
  const [eventName, setEventName] = React.useState<string>("");
  const [startDate, setStartDate] = React.useState<Date | null | string>("");
  const [location, setLocation] = React.useState<string>("");
  const [seatReserved, setSeatReserved] = React.useState<Array<ISeatDetail>>(
    []
  );
  const [totalPrice, setTotalPrice] = React.useState<number>(0);

  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [attendantName, setAttendantName] = React.useState<string>("");

  useEffect(() => {
    setSeatReserved(
      JSON.parse(localStorage.getItem("selectedSeatList") || "[]")
    );
    setTotalPrice(JSON.parse(localStorage.getItem("totalPrice") || "0"));
  }, []);

  const handleConfirmBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("confirm booking");
    localStorage.removeItem("selectedSeatList");
    localStorage.removeItem("totalPrice");
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
          <div className="grid grid-cols-3 gap-x-5">
            <div className="heading col-span-1 flex flex-col gap-y-4">
              <div>event name:</div>
              <div>start date:</div>
              <div>location:</div>
              <div>seat reserved:</div>
              <div>total price:</div>
            </div>
            <div className="flex flex-col gap-y-4">
              <div>event name</div>
              <div>start date</div>
              <div>location</div>
              <div className="flex flex-row gap-x-2">
                {seatReserved.length !== 0 ? (
                  seatReserved.map((seat: ISeatDetail) => (
                    <div key={seat.seatName}>{seat.seatName}</div>
                  ))
                ) : (
                  <div>no seat reserved</div>
                )}
              </div>
              <div>{totalPrice}</div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-row gap-x-9 items-center heading">
                <div>phone number:</div>
                <Box
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                  />
                </Box>
              </div>
              <div className="flex flex-row gap-x-28 items-center heading">
                <div>email:</div>
                <Box
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </Box>
              </div>
              <div className="flex flex-row gap-x-5 items-center heading">
                <div>attendant's name:</div>
                <Box
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                </Box>
              </div>
            </div>
          </div>
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

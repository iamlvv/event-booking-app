import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
type Props = {};

const ConfirmBookingPage = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <form className="form p-5 shadow-md border rounded-md my-20">
          <h1 className="text-4xl text-center mb-5">submit booking</h1>
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
          <div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-row gap-x-9 items-center heading">
                <div>phone number:</div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
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
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Email"
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

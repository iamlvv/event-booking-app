import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

type Props = {};

const CreateEventPage = (props: Props) => {
  const [startDate, setStartDate] = React.useState<Date | null | string>("");
  return (
    <div>
      <Header />
      <form className="form p-5 shadow-md border rounded-md my-20">
        <h1 className="text-center text-4xl mb-5">Create new event</h1>
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-row items-center gap-x-5">
            <div className="heading">event name</div>
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
                label="Event Name"
                variant="outlined"
              />
            </Box>
          </div>
          <div className="flex flex-row items-center gap-x-8">
            <div className="heading">start date</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Start Date"
                  value={startDate || null}
                  onChange={(value) => setStartDate(dayjs(value).toDate())}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="flex flex-row items-center gap-x-10">
            <div className="heading">location</div>
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
                label="Location"
                variant="outlined"
              />
            </Box>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-row items-center justify-between heading">
            <div>number of vip tickets:</div>
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
                label="Vip tickets"
                variant="outlined"
              />
            </Box>
            <div>price</div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Price" variant="outlined" />
            </Box>
          </div>
          <div className="flex flex-row items-center justify-between heading">
            <div>number of couple tickets:</div>
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
                label="Couple tickets"
                variant="outlined"
              />
            </Box>
            <div>price</div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Price" variant="outlined" />
            </Box>
          </div>
          <div className="flex flex-row items-center justify-between heading">
            <div>number of normal tickets:</div>
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
                label="Normal tickets"
                variant="outlined"
              />
            </Box>
            <div>price</div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Price" variant="outlined" />
            </Box>
          </div>
          <div className="flex flex-row gap-x-10 items-center">
            <div className="heading">upload image:</div>
            <div>
              <input type="file" title="Upload" />
            </div>
          </div>
        </div>

        <div className="text-center button w-40 m-auto item-rounded p-2 mt-5 text-3xl heading">
          <button type="submit" className="button text-center">
            create
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default CreateEventPage;

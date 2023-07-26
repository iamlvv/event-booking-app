import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Switch from "@mui/material/Switch";

type Props = {
  eventName: string;
  setEventName: React.Dispatch<React.SetStateAction<string>>;
  startDate: Date | null | string;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null | string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  vipTickets: number;
  setVipTickets: React.Dispatch<React.SetStateAction<number>>;
  vipPrice: number;
  setVipPrice: React.Dispatch<React.SetStateAction<number>>;
  coupleTickets: number;
  setCoupleTickets: React.Dispatch<React.SetStateAction<number>>;
  couplePrice: number;
  setCouplePrice: React.Dispatch<React.SetStateAction<number>>;
  normalTickets: number;
  setNormalTickets: React.Dispatch<React.SetStateAction<number>>;
  normalPrice: number;
  setNormalPrice: React.Dispatch<React.SetStateAction<number>>;
  uploadImage: File | string;
  setUploadImage: React.Dispatch<React.SetStateAction<File | string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  isPublished: boolean;
  setIsPublished: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateEventInput = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row items-center gap-x-5">
          <div className="heading">event name:</div>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField
              type="text"
              id="outlined-basic"
              label="Event Name"
              variant="outlined"
              value={props.eventName || ""}
              onChange={(e) => props.setEventName(e.target.value)}
              required
            />
          </Box>
        </div>
        <div className="flex flex-row items-center gap-x-8">
          <div className="heading">start date and time:</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "TimePicker"]}>
              <DateTimePicker
                label="Start Date and Time"
                value={props.startDate || null}
                onChange={(value) => props.setStartDate(dayjs(value).toDate())}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="flex flex-row items-center gap-x-10">
          <div className="heading">location:</div>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField
              type="text"
              id="outlined-basic"
              label="Location"
              variant="outlined"
              value={props.location || ""}
              onChange={(e) => props.setLocation(e.target.value)}
              required
            />
          </Box>
        </div>
        <div className="flex flex-row items-center gap-x-10">
          <div className="heading">description:</div>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField
              type="text"
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={props.description || ""}
              onChange={(e) => props.setDescription(e.target.value)}
              required
            />
          </Box>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-row items-center justify-between heading">
          <div>number of vip tickets:</div>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField
              type="number"
              id="outlined-basic"
              label="Vip tickets"
              variant="outlined"
              value={props.vipTickets || ""}
              onChange={(e) => props.setVipTickets(Number(e.target.value))}
              required
            />
          </Box>
          <div>price:</div>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField
              type="number"
              id="outlined-basic"
              label="Price"
              variant="outlined"
              value={props.vipPrice || ""}
              onChange={(e) => props.setVipPrice(Number(e.target.value))}
              required
            />
          </Box>
        </div>
        <div className="flex flex-row items-center justify-between heading">
          <div>number of couple tickets:</div>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField
              type="number"
              id="outlined-basic"
              label="Couple tickets"
              variant="outlined"
              value={props.coupleTickets || ""}
              onChange={(e) => props.setCoupleTickets(Number(e.target.value))}
              required
            />
          </Box>
          <div>price:</div>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField
              type="number"
              id="outlined-basic"
              label="Price"
              variant="outlined"
              value={props.couplePrice || ""}
              onChange={(e) => props.setCouplePrice(Number(e.target.value))}
              required
            />
          </Box>
        </div>
        <div className="flex flex-row items-center justify-between heading">
          <div>number of normal tickets:</div>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField
              type="number"
              id="outlined-basic"
              label="Normal tickets"
              variant="outlined"
              value={props.normalTickets || ""}
              onChange={(e) => props.setNormalTickets(Number(e.target.value))}
              required
            />
          </Box>
          <div>price:</div>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField
              type="number"
              id="outlined-basic"
              label="Price"
              variant="outlined"
              value={props.normalPrice || ""}
              onChange={(e) => props.setNormalPrice(Number(e.target.value))}
              required
            />
          </Box>
        </div>
        <div className="flex flex-row gap-x-10 items-center">
          <div className="heading">upload image:</div>
          <div>
            <input
              type="file"
              title="Upload"
              onChange={(e) => {
                props.setUploadImage(e.target.files![0]);
              }}
            />
          </div>
        </div>
        <div className="flex flex-row items-center heading">
          <div>do you want to publish this event right now?</div>
          <Switch
            checked={props.isPublished}
            onChange={(e) => props.setIsPublished(e.target.checked)}
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateEventInput;

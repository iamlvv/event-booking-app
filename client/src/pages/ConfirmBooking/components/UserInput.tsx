import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Props = {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  email: string;
  setEmail: (email: string) => void;
  attendantName: string;
  setAttendantName: (attendantName: string) => void;
};

const UserInput = (props: Props) => {
  return (
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
              value={props.phoneNumber || ""}
              onChange={(e) => props.setPhoneNumber(e.target.value)}
              required
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
              value={props.email || ""}
              onChange={(e) => props.setEmail(e.target.value)}
              required
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
              value={props.attendantName || ""}
              onChange={(e) => props.setAttendantName(e.target.value)}
              required
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default UserInput;

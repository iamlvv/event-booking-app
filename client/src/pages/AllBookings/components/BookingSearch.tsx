import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
type Props = {
  phoneNumber: string;
  verificationCode: string;
  setPhoneNumber: (phoneNumber: string) => void;
  setVerificationCode: (verificationCode: string) => void;
};

const BookingSearch = (props: Props) => {
  return (
    <div className="flex flex-row gap-x-5">
      <div>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setPhoneNumber(e.target.value)
            }
          />
        </Box>
      </div>
      <div>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            id="outlined-basic"
            label="Verification Code"
            variant="outlined"
            value={props.verificationCode || ""}
            onChange={(e) => props.setVerificationCode(e.target.value)}
          />
        </Box>
      </div>
    </div>
  );
};

export default BookingSearch;

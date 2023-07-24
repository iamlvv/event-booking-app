import axios from "axios";
import Swal from "sweetalert2";
import { IBookingDetail } from "../../interface/Interfaces";
import { Dispatch, SetStateAction } from "react";
import {
  CREATE_NEW_BOOKING_API_URL,
  GET_BOOKING_BY_PHONE_NUMBER_AND_VERIFICATION_CODE_API_URL,
} from "../../constants/APIConstants";

type createNewBookingProps = {
  eventId: string | undefined;
  email: string;
  seatName: any;
  phoneNumber: string;
  bookingPrice: number;
  bookerName: string;
};
export const createNewBooking = async (props: createNewBookingProps) => {
  try {
    const response = await axios.post(
      CREATE_NEW_BOOKING_API_URL + `${props.eventId}/booking`,
      {
        seatName: props.seatName,
        email: props.email,
        phoneNumber: props.phoneNumber,
        bookingPrice: props.bookingPrice,
        bookerName: props.bookerName,
      }
    );
    localStorage.removeItem("selectedSeatList");
    localStorage.removeItem("totalPrice");
    Swal.fire({
      icon: "success",
      title: "Booking success",
      text: `You have booked this event successfully!`,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });
  } catch (error) {
    console.log(error);
  }
};

type getBookingByPhoneNumberAndVerificationCodeProps = {
  phoneNumber: string;
  verificationCode: string;
  setBooking: Dispatch<SetStateAction<IBookingDetail[]>>;
};
export const getBookingByPhoneNumberAndVerificationCode = async (
  props: getBookingByPhoneNumberAndVerificationCodeProps
) => {
  try {
    const response = await axios.post(
      GET_BOOKING_BY_PHONE_NUMBER_AND_VERIFICATION_CODE_API_URL,
      {
        phone: props.phoneNumber,
        verificationCode: props.verificationCode,
      }
    );
    console.log(response.data);
    props.setBooking(response.data);
  } catch (error) {
    console.log(error);
  }
};

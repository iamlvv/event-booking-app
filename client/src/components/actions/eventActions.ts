import axios from "axios";
import {
  IEventDetail,
  ISeatDetail,
  ISeatPrice,
} from "../../interface/Interfaces";
import Swal from "sweetalert2";
import {
  CREATE_NEW_EVENT_API_URL,
  GET_ALL_EVENTS_API_URL,
  GET_EVENT_BY_ID_API_URL,
} from "../../constants/APIConstants";

type getAllEventsProps = {
  setEvents: (events: IEventDetail[]) => void;
};
// This function is used to get all events from the database
export const getAllEvents = async (props: getAllEventsProps) => {
  try {
    const response = await axios.get(GET_ALL_EVENTS_API_URL);
    props.setEvents(response.data);
  } catch (error) {
    console.log(error);
  }
};

type getEventByIdProps = {
  id: string | undefined;
  setEvent: (event: IEventDetail) => void;
  setSeatList: (seatList: ISeatDetail[]) => void;
  setSeatPrices: (seatPrices: ISeatPrice) => void;
};
// This function is used to get a specific event from the database
export const getEventById = async (props: getEventByIdProps) => {
  try {
    const response = await axios.get(GET_EVENT_BY_ID_API_URL + `${props.id}`);
    props.setEvent(response.data);
    props.setSeatList(response.data.seats);
    props.setSeatPrices(response.data.price);
  } catch (error) {
    console.log(error);
  }
};

type getEventByIdForBookingProps = {
  id: string | undefined;
  setEventName: (eventName: string) => void;
  setStartDate: (startDate: string) => void;
  setLocation: (location: string) => void;
};
// This function is used to get a specific event from the database
export const getEventByIdForBooking = async (
  props: getEventByIdForBookingProps
) => {
  try {
    const response = await axios.get(GET_EVENT_BY_ID_API_URL + `${props.id}`);
    props.setEventName(response.data.name);
    props.setStartDate(new Date(response.data.startDate).toLocaleString());
    props.setLocation(response.data.location);
  } catch (error) {
    console.log(error);
  }
};

// This function is used to create a new event
type createNewEventProps = {
  name: string;
  description: string;
  location: string;
  startDate: string;
  startTime: string;
  vipTickets: number;
  vipPrice: number;
  normalTickets: number;
  normalPrice: number;
  coupleTickets: number;
  couplePrice: number;
  image: File;
};

export const createNewEvent = async (props: createNewEventProps) => {
  try {
    const response = await axios.post(CREATE_NEW_EVENT_API_URL, {
      name: props.name,
      description: props.description,
      location: props.location,
      startDate: props.startDate,
      startTime: props.startTime,
      vipTickets: props.vipTickets,
      vipPrice: props.vipPrice,
      normalTickets: props.normalTickets,
      normalPrice: props.normalPrice,
      coupleTickets: props.coupleTickets,
      couplePrice: props.couplePrice,
      image: props.image,
    });
    Swal.fire({
      icon: "success",
      title: "Create event success",
      text: `You have created a new event successfully!`,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// This function is used to search for an event
type searchEventProps = {
  searchValue: string;
  setEvents: (events: IEventDetail[]) => void;
};

export const searchEvent = async (props: searchEventProps) => {
  try {
    const response = await axios.get(
      GET_ALL_EVENTS_API_URL + `?q=${props.searchValue}`
    );
    props.setEvents(response.data);
  } catch (error) {
    console.log(error);
  }
};
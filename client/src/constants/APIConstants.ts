// Events API
export const GET_ALL_EVENTS_API_URL = `${process.env.REACT_APP_API_URL}/api/event`;
export const GET_EVENT_BY_ID_API_URL = `${process.env.REACT_APP_API_URL}/api/event/`;
export const CREATE_NEW_EVENT_API_URL = `${process.env.REACT_APP_API_URL}/api/event/new`;
export const UPDATE_EVENT_API_URL = "http://localhost:3000/events/";
export const GET_ALL_UNPUBLISHED_EVENTS_API_URL = `${process.env.REACT_APP_API_URL}/api/event`;
export const PUBLISH_AN_EVENT_API_URL = `${process.env.REACT_APP_API_URL}/api/event`;
export const GET_FIVE_HIGHEST_BOOKING_EVENTS_API_URL = `${process.env.REACT_APP_API_URL}/api/event/statistics/5`;
// Booking API
export const CREATE_NEW_BOOKING_API_URL = `${process.env.REACT_APP_API_URL}/api/event/`;
export const GET_BOOKING_BY_PHONE_NUMBER_AND_VERIFICATION_CODE_API_URL = `${process.env.REACT_APP_API_URL}/api/booking`;

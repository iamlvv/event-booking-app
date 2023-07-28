// ClassName for seat
export const SEAT =
  "w-20 h-10 m-1 text-center font-bold rounded-md flex justify-center items-center select-none";

export const NORMAL_SEAT_AVAILABLE =
  "seat bg-green-100 hover:bg-green-200 cursor-pointer pointer-events-none" +
  SEAT;

export const COUPLE_SEAT_AVAILABLE =
  "seat bg-pink-100 hover:bg-pink-200 cursor-pointer pointer-events-none" +
  SEAT;

export const VIP_SEAT_AVAILABLE =
  "seat bg-yellow-100 hover:bg-yellow-200 cursor-pointer pointer-events-none" +
  SEAT;

export const SEAT_RESERVED = "seat bg-gray-500 cursor-not-allowed" + SEAT;

export const NORMAL_SEAT_SELECTED =
  "seat bg-green-500 hover:bg-green-600 cursor-pointer" + SEAT;

export const COUPLE_SEAT_SELECTED = "seat bg-pink-500 hover:bg-pink-600" + SEAT;

export const VIP_SEAT_SELECTED =
  "seat bg-yellow-500 hover:bg-yellow-600 cursor-pointer" + SEAT;

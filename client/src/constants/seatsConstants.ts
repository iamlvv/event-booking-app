// ClassName for seat
export const SEAT = 'w-20 h-10 m-1 text-center font-bold rounded-md flex justify-center items-center';

export const NORMAL_SEAT_AVAILABLE = 'seat bg-green-100 hover:bg-green-200 cursor-pointer pointer-events-none' + SEAT;

export const COUPLE_SEAT_AVAILABLE = 'seat bg-pink-100 hover:bg-pink-200 cursor-pointer pointer-events-none' + SEAT;

export const VIP_SEAT_AVAILABLE = 'seat bg-yellow-100 hover:bg-yellow-200 cursor-pointer pointer-events-none' + SEAT;

export const SEAT_RESERVED = 'seat bg-gray-500 cursor-not-allowed' + SEAT;
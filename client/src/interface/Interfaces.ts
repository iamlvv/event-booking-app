export interface ISeatDetail {
  seatName: string;
  isReserved: boolean;
  seatType: string;
}

export interface ISeatPrice {
  normal: number;
  couple: number;
  vip: number;
}

export interface IEventDetail {
  _id: string;
  description: string;
  location: string;
  name: string;
  price: ISeatPrice;
  seatsRemain: number;
  startDate: string;
  seats: ISeatDetail[];
  __v: number;
}

export interface IBookingDetail {
  _id: string;
  event: IEventDetail;
  bookerName: string;
  email: string;
  phoneNumber: string;
  seatName: string[];
  bookingPrice: number;
  verificationCode: string;
  __v: number;
}

import React, { useEffect, useState } from "react";
import stage from "../../../assets/img/stage.png";
import { ISeatDetail } from "../../../interface/Interfaces";
import {
  COUPLE_SEAT_AVAILABLE,
  NORMAL_SEAT_AVAILABLE,
  SEAT_RESERVED,
  VIP_SEAT_AVAILABLE,
} from "../../../constants/seatsConstants";

type Props = {
  seatList: Array<ISeatDetail>;
  setSelectedSeatList: (seatList: Array<ISeatDetail>) => void;
};

const SeatMap = (props: Props) => {
  const [selectedSeat, setSelectedSeat] = useState<ISeatDetail | null>(null);
  const [selectedSeatList, setSelectedSeatList] = useState<Array<ISeatDetail>>(
    []
  );

  // Mark selected seat as reserved, and click on it again to unmark
  const [seatState, setSeatState] = useState<Array<any>>([]);

  useEffect(() => {
    // const selectedSeatList = localStorage.getItem("selectedSeatList");
    // if (selectedSeatList) {
    //   setSelectedSeatList(JSON.parse(selectedSeatList));
    // }
    setSeatState(
      props.seatList.map((seat) => {
        return { ...seat, isSelected: false };
      })
    );
  }, []);

  useEffect(() => {
    props.setSelectedSeatList(selectedSeatList);
  }, [selectedSeatList]);

  const handleChooseSeat = (seat: ISeatDetail) => {
    console.log(seat);
    setSelectedSeat((selectedSeat) => {
      if (selectedSeat === seat) {
        return null;
      } else {
        return seat;
      }
    });

    // setSeatState((previousSeatState) =>
    //   previousSeatState.map((seatState) => {
    //     if (seatState.seatName === seat.seatName) {
    //       return { ...seatState, isSelected: !seatState.isSelected };
    //     }
    //     return seatState;
    //   })
    // );
    // console.log(seatState);

    if (selectedSeatList.includes(seat)) {
      const newSelectedSeatList = selectedSeatList.filter(
        (selectedSeat) => selectedSeat !== seat
      );
      setSelectedSeatList(newSelectedSeatList);
    } else if (!selectedSeatList.includes(seat)) {
      const newSelectedSeatList = [...selectedSeatList, seat];
      setSelectedSeatList(newSelectedSeatList);
    }
  };
  return (
    <div>
      <div className="my-10">
        <img
          src={stage}
          alt="stage"
          width={500}
          height={500}
          className="m-auto"
        />
      </div>
      <div className="flex flex-col items-center gap-y-10 mb-10">
        <div className="flex flex-row justify-center">
          {props.seatList.map(
            (seat) =>
              seat.seatType === "v" && (
                <div
                  className={
                    seat.isReserved ? SEAT_RESERVED : VIP_SEAT_AVAILABLE
                  }
                  key={seat.seatName}
                  onClick={() => {
                    if (seat.isReserved) {
                      return;
                    }
                    handleChooseSeat(seat);
                  }}
                >
                  {seat.seatName}
                </div>
              )
          )}
        </div>
        <div className="flex flex-row justify-center">
          {props.seatList.map(
            (seat) =>
              seat.seatType === "c" && (
                <div
                  className={
                    seat.isReserved ? SEAT_RESERVED : COUPLE_SEAT_AVAILABLE
                  }
                  key={seat.seatName}
                  onClick={() => {
                    if (seat.isReserved) {
                      return;
                    }
                    handleChooseSeat(seat);
                  }}
                >
                  {seat.seatName}
                </div>
              )
          )}
        </div>
        <div className="flex flex-row justify-center">
          {props.seatList.map(
            (seat) =>
              seat.seatType === "n" && (
                <div
                  className={
                    seat.isReserved ? SEAT_RESERVED : NORMAL_SEAT_AVAILABLE
                  }
                  key={seat.seatName}
                  onClick={() => {
                    if (seat.isReserved) {
                      return;
                    }
                    handleChooseSeat(seat);
                  }}
                >
                  {seat.seatName}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default SeatMap;

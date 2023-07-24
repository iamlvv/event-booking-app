import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CreateEventInput from "./components/CreateEventInput";
import Swal from "sweetalert2";

type Props = {};

const CreateEventPage = (props: Props) => {
  const [startDate, setStartDate] = React.useState<Date | null | string>("");
  const [startTime, setStartTime] = React.useState<Date | null | string>("");
  const [eventName, setEventName] = React.useState<string>("");
  const [location, setLocation] = React.useState<string>("");
  const [vipTickets, setVipTickets] = React.useState<number>(0);
  const [vipPrice, setVipPrice] = React.useState<number>(0);
  const [coupleTickets, setCoupleTickets] = React.useState<number>(0);
  const [couplePrice, setCouplePrice] = React.useState<number>(0);
  const [normalTickets, setNormalTickets] = React.useState<number>(0);
  const [normalPrice, setNormalPrice] = React.useState<number>(0);
  const [uploadImage, setUploadImage] = React.useState<File | string>(
    "fileurl"
  );
  const handleCreateNewEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (startDate === "" || startTime === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a date and a time!",
      });
      return;
    }
    if (uploadImage === "fileurl") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please upload an image!",
      });
      return;
    }
    const file = uploadImage as File;
    const formData = new FormData();
    formData.append("image", file);
  };

  return (
    <div>
      <Header />
      <form
        className="form p-5 shadow-md border rounded-md my-20"
        onSubmit={handleCreateNewEvent}
      >
        <h1 className="text-center text-4xl mb-5">Create new event</h1>
        <CreateEventInput
          startDate={startDate}
          setStartDate={setStartDate}
          startTime={startTime}
          setStartTime={setStartTime}
          eventName={eventName}
          setEventName={setEventName}
          location={location}
          setLocation={setLocation}
          vipTickets={vipTickets}
          setVipTickets={setVipTickets}
          vipPrice={vipPrice}
          setVipPrice={setVipPrice}
          coupleTickets={coupleTickets}
          setCoupleTickets={setCoupleTickets}
          couplePrice={couplePrice}
          setCouplePrice={setCouplePrice}
          normalTickets={normalTickets}
          setNormalTickets={setNormalTickets}
          normalPrice={normalPrice}
          setNormalPrice={setNormalPrice}
          uploadImage={uploadImage}
          setUploadImage={setUploadImage}
        />
        <div className="text-center button w-40 m-auto item-rounded p-2 mt-5 text-3xl heading">
          <button type="submit" className="button text-center">
            create
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default CreateEventPage;

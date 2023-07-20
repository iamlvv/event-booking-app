import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import BookingPage from "./pages/Booking/BookingPage";
import ConfirmBookingPage from "./pages/ConfirmBooking/ConfirmBookingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/confirm-booking" element={<ConfirmBookingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import BookingPage from "./pages/Booking/BookingPage";
import ConfirmBookingPage from "./pages/ConfirmBooking/ConfirmBookingPage";
import AllBookingsPage from "./pages/AllBookings/AllBookingsPage";
import StatisticsPage from "./pages/Statistics/StatisticsPage";
import CreateEventPage from "./pages/CreateEvent/CreateEventPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage itemsPerPage={9} />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route
            path="/booking/:id/confirm-booking"
            element={<ConfirmBookingPage />}
          />
          <Route path="/allbookings" element={<AllBookingsPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/createnewevent" element={<CreateEventPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

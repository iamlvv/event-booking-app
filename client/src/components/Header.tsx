import React from "react";
import logo from ".././assets/img/logo.png";
import { NavLink } from "react-router-dom";
type Props = {};

const styles = {
  header: {
    height: "68px",
  },
};
const Header = (props: Props) => {
  return (
    <div
      className="header flex flex-row justify-between items-center pr-10"
      style={styles.header}
    >
      <div>
        <img src={logo} alt="logo" width={91} height={68} />
      </div>
      <ul className="flex flex-row text-white gap-x-10 heading">
        <NavLink to="/">
          <li>homepage</li>
        </NavLink>
        <NavLink to="/createnewevent">
          <li>create new event</li>
        </NavLink>
        <NavLink to="/statistics">
          <li>statistics</li>
        </NavLink>
        <NavLink to="/allbookings">
          <li>all bookings</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;

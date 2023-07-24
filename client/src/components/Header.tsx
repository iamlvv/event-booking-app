import React from "react";
import logo from ".././assets/img/logo.png";
import { NavLink } from "react-router-dom";
import {
  NAVIGATION_ITEM_ACTIVE,
  NAVIGATION_ITEM_INACTIVE,
} from "../constants/navigationConstants";
type Props = {};

const styles = {
  header: {
    height: "68px",
  },
};
const Header = (props: Props) => {
  return (
    <div
      className="select-none header flex flex-row justify-between items-center px-10"
      style={styles.header}
    >
      <div>
        <img
          src={logo}
          alt="logo"
          width={91}
          height={68}
          className="cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />
      </div>
      <ul className="flex flex-row text-white gap-x-10 heading">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? NAVIGATION_ITEM_ACTIVE : NAVIGATION_ITEM_INACTIVE
          }
        >
          <li>homepage</li>
        </NavLink>
        <NavLink
          to="/createnewevent"
          className={({ isActive }) =>
            isActive ? NAVIGATION_ITEM_ACTIVE : NAVIGATION_ITEM_INACTIVE
          }
        >
          <li>create new event</li>
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? NAVIGATION_ITEM_ACTIVE : NAVIGATION_ITEM_INACTIVE
          }
        >
          <li>statistics</li>
        </NavLink>
        <NavLink
          to="/allbookings"
          className={({ isActive }) =>
            isActive ? NAVIGATION_ITEM_ACTIVE : NAVIGATION_ITEM_INACTIVE
          }
        >
          <li>all bookings</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;

import React from "react";
import logo from "../assets/img/logo.png";
import logoInstagram from "../assets/img/iconsInstagram.png";
import logoLinkedIn from "../assets/img/iconsLinkedin.png";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="shadow-sm footer p-10 select-none">
      <div className="border-b pt-10 mx-10"></div>
      <div className="flex flex-row justify-center items-center gap-x-20">
        <div>
          <img
            src={logo}
            alt="logo"
            width={200}
            height={100}
            className="cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
        </div>
        <div className="flex flex-row gap-x-9">
          <h2>Home</h2>
          <h2>About Us</h2>
          <h2>Contact</h2>
          <h2>Terms</h2>
          <h2>Privacy</h2>
        </div>
        <div className="flex flex-row gap-x-9">
          <img src={logoInstagram} alt="instagram logo" />
          <img src={logoLinkedIn} alt="linkedin logo" />
        </div>
      </div>
      <h2 className="text-center">&copy; Eventscape. All Rights Reserved</h2>
    </div>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Booking1.css";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";

const Booking2 = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const newUser = {
    name: name,
    mobile: mobile,
    email: email,
  };

  const handleBookingConfirmation = (e) => {
    e.preventDefault();
   
    if (name && mobile && email) {
      window.alert(
        "Hey " +
          name +
          "! Booking done successfully.\nWe will send the booking details to your e-mail , Thank you!"
      );
    }
    UpdateDB(newUser);
    window.location.href = '/';
  };

  function UpdateDB(newUser) {
    fetch("http://localhost:3000/api/userdetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
   
  }
  return (
    <>
      <Navbar1 />
      <div className="body">
        <div id="summary">
          <h3>CONFIRM BOOKING</h3>
          <div className="booking-desc">
            <div className="box-left">
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/268/medium/HONDA_ACTIVA_5G.png?1660805373' alt='DIO'></img>
                            <b>HONDA ACTIVA 5G</b>
            </div>
            <div className="box-right">
              <form onSubmit={handleBookingConfirmation}>
                <input
                  id="username"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                  required
                ></input>
                <br />
                <input
                  id="userno"
                  type="number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your Mobile Number"
                  required
                ></input>
                <br />
                <input
                  id="usermail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your mail"
                  required
                ></input>
                <br />
                <button id="confirm-btn" type="submit" hre>
                  <b> CONFIRM BOOKING </b>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booking2;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Booking1.css";
import qrcode from "./qrcode.jpeg";
import scan from "./qrscan.gif";
import pay from "./payment.gif";
import confirm from "./confirmpage.png";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";
const Booking1 = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [showScanPage, setShowScanPage] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); // New state for confirmation page

  const [countdown, setCountdown] = useState(60);
  const [timer, setTimer] = useState(null);
  const [amount, setAmount] = useState(1500); // Default amount

  const newUser = {
    name: name,
    mobile: mobile,
    email: email,
  };

  const handleBookingConfirmation = (e) => {
    e.preventDefault();

    if (name && mobile && email) {
      // Set showConfirmation to true when all fields are filled
      setShowConfirmation(true);
    }
    UpdateDB(newUser);
    // window.location.href = "/";
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

  const handleScanOptionClick = () => {
    setShowScanPage(true);
    startCountdown();
  };

  const handleScanPageClose = () => {
    setShowScanPage(false);
    resetCountdown();
  };

  const startCountdown = () => {
    setTimer(
      setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(timer);
            setShowScanPage(false);
          }
          return prevCountdown - 1;
        });
      }, 1000)
    );
  };

  const resetCountdown = () => {
    clearInterval(timer);
    setCountdown(60);
  };

  useEffect(() => {
    if (showScanPage && countdown === 0) {
      setShowScanPage(false);
    }
  }, [countdown, showScanPage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") {
      setAmount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var options = {
      key: "rzp_test_yqMRKBUCTSpf2n",
      key_secret: "DABvZchV7NewCIJLzesnSIdv",
      amount: amount * 100, // Convert to smallest currency unit (cents/paise)
      currency: "INR",
      name: "Bike Rental",
      description: "Have a Happy journey",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: name,
        email: email,
        contact: mobile,
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <Navbar1 />
      <div className="body">
        <div id="summary">
          <h3>CONFIRM BOOKING</h3>
          <div className="booking-desc">
            <div className="box-left">
              <img
                src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/035/medium/HONDA_DIO.png?1660722410"
                alt="DIO"
              ></img>
              <b>HONDA DIO</b>
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
                <br />
                <div>
                  <h2>PAYMENTS OPTION</h2>
                </div>
                <br />
                <br />
                <div id="paymentoption">
                  <div className="cashon">
                    <input
                      type="checkbox"
                      id="online"
                      name="paymentMethod"
                      value="online"
                    />
                    <label
                      className="radio-label"
                      htmlFor="online"
                    >
                      Cash On Payment
                    </label>
                  </div>
                  <div className="scan" onClick={handleScanOptionClick}>
                    <img src={scan} alt="" />
                    <p>Scan and Pay</p>
                  </div>
                  <div className="payonline" onClick={handleSubmit}>
                    <img src={pay} alt="" />
                    <p>Online Payment</p>
                  </div>
                </div>
                <br />
                <button id="confirm-btn" type="submit" >
                  <b> CONFIRM BOOKING </b>
                </button>
              </form>
            </div>
          </div>
        </div>
        {showScanPage && (
          <div className="scan-page-overlay">
            <div className="scan-page">
              <h2>Scan and Pay</h2>
              <button onClick={handleScanPageClose}>✖</button>
              <img src={qrcode} alt="" />
              <p>{countdown}</p>
            </div>
          </div>
        )}
        {showConfirmation && (
          <div className="confirmation-overlay">
            <div className="confirmation-content">
              <h2>Booking Confirmed!</h2>
              <img src={confirm} alt="Confirmation Image" />
              <p>Your booking is confirmed. We will send the booking details to your email.</p>
              <button>back
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Booking1;

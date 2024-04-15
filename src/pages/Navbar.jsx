import React, { useState } from 'react';
import './Navbar.css'
import PopUp from './PopUp';
import Location from "./Location.png"
import Drop from "./drop.jpg"
import User from "./user.png"

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = () => {
    setShowPopup(true);
  };

  const handleImageClick = (imageName) => {
    setSelectedLocation(imageName);
    setShowPopup(false);
  };
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2>BIKE <span style ={{color:"#001f73"}}>RENTALS</span></h2>
      </div>
      
      <div className='about1 '>
        <h3>About</h3>
      </div>
      <div className='number'>
        <h3>8148948508</h3>
      </div>
      <div className="review">
    <h3>Review</h3>
    </div>
    <div className='search-location' onClick={handleLocationClick}>
    <div className="img-container">
          <img src={Location} alt="" className="location-img" />
        </div>
        <span>{selectedLocation || 'Select Location'}</span>
        <img src={Drop}alt="" className='drop-img'></img>
        
      </div>

      {showPopup && (
        <PopUp handleImageClick={handleImageClick} />
      )}
    <div className='profile'>
      <img src={User} alt=""></img>
    </div>
    </div>
  );
};

export default Navbar;

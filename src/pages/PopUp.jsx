import React from 'react';
import './PopUp.css'; // Assuming you have CSS styles for the popup
import Coimbatore from "./Coimbatore.png";
import Tirunelveli from "./Tirunelveli.png";
import Thoothukudi from "./Thoothukudi.png";
import Tirchy from "./Tirchy.png";
import Close from "./close.png";
import Namakkal from "./Namakkal.jpg";
import Chennai from "./chennai.jpg";


const PopUp = ({ handleImageClick }) => {
  const images = [
    { name: 'Coimbatore', src: Coimbatore },
    { name: 'Tirunelveli', src: Tirunelveli },
    { name: 'Thoothukudi', src: Thoothukudi },
    { name: 'Tirchy', src: Tirchy },
    { name: 'Namakkal', src: Namakkal }, 
    { name: 'Chennai', src: Chennai }, ];

  const handleClick = (imageName) => {
    handleImageClick(imageName);
  };

  return (
    <div className='popup-container'>

      <div className='popup'>
      <div className='popup-close' onClick={() => handleImageClick(null)}><img src={Close} alt=""></img></div>

        <div className='popup-content'>


          {images.map((image, index) => (
            <div key={index} className='popup-image-container' onClick={() => handleClick(image.name)}>
              <img src={image.src} alt={image.name} className='popup-image' />
              <p className='popup-image-name'>{image.name}</p>
              <div></div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopUp;

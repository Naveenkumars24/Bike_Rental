import React, { useState, useEffect } from 'react';
import './Page1.css'
import Bg1 from'./Bg1.png'
import Bg2 from'./Bg2.png'
import Bg3 from'./Bg3.png'
import Bg4 from'./Bg4.png'



const Page1 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % imageSlide.length);
        }, 4000); 

        return () => clearInterval(interval);
    }, []);
    const imageSlide = [Bg1, Bg2, Bg3,Bg4]; 
    
    const bgImageStyle = {
      backgroundImage: `url(${imageSlide[currentSlide]})`,
      
      backgroundSize: 'cover',
      
      width: '100%', 
      height: '80vh'
      
  };


// const Page1 = () => {
//   const sentences = [
//     'RENT TODAY,OWN TOMORROW',
//     'SELF RIDE BIKE RENTALS',
//     'LONG TERM RENTALS',
//   ];

//   const [quoteIndex, setQuoteIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setQuoteIndex((prevIndex) => (prevIndex + 1) % sentences.length);
//     }, 3000); // Change sentence every 3000 milliseconds (3 seconds)

//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, []);
  const handlePickupDateInputFocus = (event) => {
    event.target.type = 'date';
    event.target.setAttribute('min', new Date().toISOString().split('T')[0]);
  };
  
  function UpdateDB(id, datetime) {
    fetch(`http://localhost:4000/api/datetime/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datetime),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to update datetime.");
      }
      return res.json();
    })
    .then((date) => {
      console.log("Datetime updated successfully:", date);
      // Handle any further actions if needed
    })
    .catch((error) => {
      console.error("Error updating datetime:", error.message);
      // Handle error if needed
    });
  }
  const id = "65f08e5f93052e94eb5c2e1c"; // Replace with your document ID

  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropDate, setDropDate] = useState('');
  const [dropTime, setDropTime] = useState('');

  const changeValue = () => {
    const datetime = {
      pdate: pickupDate,
      ptime: pickupTime,
      ddate: dropDate,
      dtime: dropTime
    };
    UpdateDB(id,datetime);
    console.log('Updating data:', datetime);
  };
  const handledate=(e)=>{
    e.target.type='date';

  }
 
  return (
    
    <div>
    <div id='heropage'>
     
      {/*----------------- quotes conatiner------------- */}
      {/* <div id='quotes'>
        <h1><b>{sentences[quoteIndex]}</b></h1>
      </div> */}
      <div className="slider-container">
            <div  className="slider-image" style={bgImageStyle}></div>
        </div>

      {/* ---------------search container------------- */}
      <div className="scontainer"> 

      <div className="dtcontainer"> 
      
      {/* <p> &nbsp; PICKUP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DROP</p> */}
      <input id='pickupdate' type='text'  onChange={(e) => setPickupDate(e.target.value)} defaultValue={'Pickup Date'} onFocus={handledate} />
      {/* <input  type='time' onChange={(e) => setPickupTime(e.target.value)} /> */}
      <select id='pickuptime' onChange={(e) => setPickupTime(e.target.value)}>
      <option value="none" selected disabled hidden>Pick Time</option> 
        <option>07:00 am</option>
        <option>07:30 am</option>
        <option>08:00 am</option>
        <option>08:30 am</option>
      </select>
      
      <input id='dropdate' type='text' onChange={(e) => setDropDate(e.target.value)}  defaultValue={'Dropoff Date'} onFocus={handledate} />
      {/* <input id='droptime' type='time' onChange={(e) => setDropTime(e.target.value)} /> */}
      <select id='droptime' onChange={(e) => setDropTime(e.target.value)} >
      <option value="none" selected disabled hidden>Dropoff Time</option> 
        <option>05:00 pm</option>
        <option>05:30 pm</option>
        <option>06:00 pm</option>
        <option>06:30 pm</option>
      </select>
      <br/><br/>
       <a href='/showcase' ><button id='rent-btn' type="submit" onClick={changeValue}>RENT A BIKE</button></a>
       
      </div>
      
      {/* End of Search  */}
         {/* <video autoPlay muted loop id='background-video'>
        <source src='background-video.mp4' type='video/mp4' />
        Your browser does not support the video tag. 
      </video>  */}
    </div> 
    </div>
    </div>
    
 
    
    
  );
};

export default Page1;

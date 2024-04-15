import React, { useState,useRef } from 'react';
import './Review.css';
import emailjs from '@emailjs/browser';

function Review() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const formRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_v2quprh', 'template_at6oj6o', formRef.current, {
                publicKey: 'fSPWQY_GYnueJ6nZO',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
  

  return (
    <div className='rv'>
      <form ref={formRef} onSubmit={sendEmail}>
      <div className='para'>
        <h1>"Feel the wind in your hair, rent a bike and ride into the freedom of the open road."</h1>
      </div>
      <div className='rvform'>
        <input className='name' type="text" placeholder='Name'  name="from_name"required  />
        <input className='email' type="email" placeholder='Email' name="from_email" required/>
        <textarea className='des' placeholder='Review'  name="message" required></textarea>
      
      <div className='rating'>
        <h2>Rating</h2>
        <div className='star-rating'>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${index < rating ? 'star selected' : 'star'}${index < hover ? ' selected' : ''}`}
              onMouseOver={() => setHover(index + 1)}
              onMouseOut={() => setHover(null)}
              onClick={() => setRating(index + 1)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
       <button className='submit-btn'  >Submit</button>
    </div>
    </form>
    </div>

  );
}

export default Review;
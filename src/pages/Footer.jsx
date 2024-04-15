import React from 'react';
import './Footer.css';
import PhoneImage from './Phone.png';
import MailImage from './Mail.png';
import PlaneImage from './Plane.png';
import link from './Linkdin.png';
import insta from './Instagram.png';
import fb from './Facebook.png';
import twit from './Twitter.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className='sb_footer-links-div'>
            <div className='about'>
              <h2>About Bike Rentals</h2>
              <p>
                Bike Rental is a brand new offering from Bike. Bike Rentals has
                selected a few of the trusted Bike Vendor Partners in Hyderabad
                who provide available bikes for rent.
              </p>
            </div>
          </div>
          <div className='sb_footer-links-div'>
            <div className='contact'>
              <h2>Get In Touch</h2>
              <p>
                <img src={PhoneImage} alt='' /> +91 9842502520
              </p>
              <p>
                <img src={MailImage} alt='' /> bikrrentals1515@gmail.com
              </p>
              <p>
                <img src={PlaneImage} alt='' /> TamilNadu, India.
              </p>
            </div>
          </div>
          <div className='sb_footer-links-div'>
            <div className='places'>
              <h2>We're At</h2>
              <ul>
                <li>Coimbatore</li>
                <li>Tirunelveli</li>
                <li>Thoothukudi</li>
                <li>Tirchy</li>
              </ul>
            </div>
          </div>
          <div className='sb_footer-links-div'>
            <div className='follow'>
                
              <h2>Follow Us</h2>
              </div>
              <a href="https://www.instagram.com/royalbrothersrentals/"target='_blank'>
                <img src={insta} alt='' />
                </a>
              <a href="https://www.facebook.com/RoyalBrothersBikeRentals/" target='_blank'>
                <img src={fb} alt='' />
                </a>
              <a href='https://twitter.com/royalbrothersin?lang=en'target='_blank'>
                <img src={twit} alt='' />
                </a>
              
              <a href='https://www.linkedin.com/company/royal-brothers/' target='_blank'>
                <img src={link} alt='' />
                </a>
              
            </div>
            </div>
          
            <div className='sb_footer-links-div'>
            <div className='rent'>
              <h2>Bikes For Rent</h2>
              <ul>
                <li>Honda Activa for rent </li>
                <li>Hero Passion for rent</li>
                <li>Jawa for rent </li>
                <li>Royal enfield for rent</li>
                <li>Bajaj Pulsar for rent</li>
                <li>Yamaha for rent</li>
                <li>TVS Sport for rent</li>
                <li>Hero Splendor Plus</li>
                <li>KTM Duke for rent</li>
                
                
              </ul>
            </div>
          </div>

        </div>
      </div>
    
  );
};

export default Footer;

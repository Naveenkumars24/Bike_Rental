import React, { useEffect, useState } from 'react'
import './Showcase.css'
import Navbar1 from './Navbar1';
import Footer from './Footer'

const Showcase = () => {
  
  const [datetime, setDateTime] = useState([]);
 // const [bikename,setBikeName] = useState('');

  useEffect(() => {
    fetch("http://localhost:3000/api/datetime")
      .then((res) => res.json())
      .then((data) => setDateTime(data));
  }, []);

  return (
    <div>
        <Navbar1 />
        <div id='body'>
          <div id='showcase-1'>
          <div id='bike-box'>
            <div id='bike-name'><b>HONDA DIO</b></div>
            <div id='bike-img'>
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/035/medium/HONDA_DIO.png?1660722410' alt='DIO'></img>
            </div>
            <div id='bike-desc'>
               <div id='date-time'> 
                  <div id='from-dt'><b>{datetime.map(item => item.ptime)}</b><br/>{datetime.map(item => item.pdate)}</div>
                  <label id='to'>to</label>  
                  <div id='to-dt'><b>{datetime.map(item => item.dtime)}</b><br/>{datetime.map(item => item.ddate)}</div>
               </div>
              </div>
               <div id='price-book'>
                   <div id='price'><b>₹ 800</b> /day<br/>(tax inlcluded)</div>
                   <div id='book-btn'>
                   <a href='/confirm-booking1' ><button id='book'>BOOK</button> </a>
                   </div>
               </div>
            
          </div>
          <div id='bike-box'>
            <div id='bike-name'><b>HONDA ACTIVA 5G</b></div>
            <div id='bike-img'>
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/268/medium/HONDA_ACTIVA_5G.png?1660805373' alt='DIO'></img>
            </div>
            <div id='bike-desc'>
               <div id='date-time'> 
                  <div id='from-dt'><b>{datetime.map(item => item.ptime)}</b><br/>{datetime.map(item => item.pdate)}</div>
                  <label id='to'>to</label>  
                  <div id='to-dt'><b>{datetime.map(item => item.dtime)}</b><br/>{datetime.map(item => item.ddate)}</div>
               </div>
              </div>
               <div id='price-book'>
                   <div id='price'><b>₹ 800</b> /day<br/>(tax inlcluded)</div>
                   <div id='book-btn'>
                   <a href='/confirm-booking2' ><button id='book'>BOOK</button> </a>
                   </div>
               </div>
            
          </div>
          <div id='bike-box'>
            <div id='bike-name'><b>YAMAHA FASCINO</b></div>
            <div id='bike-img'>
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/026/medium/YAMAHA_FASCINO.png?1660722035' alt='DIO'></img>
            </div>
            <div id='bike-desc'>
               <div id='date-time'> 
                  <div id='from-dt'><b>{datetime.map(item => item.ptime)}</b><br/>{datetime.map(item => item.pdate)}</div>
                  <label id='to'>to</label>  
                  <div id='to-dt'><b>{datetime.map(item => item.dtime)}</b><br/>{datetime.map(item => item.ddate)}</div>
               </div>
              </div>
               <div id='price-book'>
                   <div id='price'><b>₹ 850</b> /day<br/>(tax inlcluded)</div>
                   <div id='book-btn'>
                   <a href='/confirm-booking3' ><button id='book'>BOOK</button> </a>
                   </div>
               </div>
            
          </div>
          </div> 
          <div id='showcase-2'>
          <div id='bike-box'>
            <div id='bike-name'><b>HONDA CB HORNET 160</b></div>
            <div id='bike-img'>
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/151/medium/HONDA_HORNET_160.png?1660730840' alt='DIO'></img>
            </div>
            <div id='bike-desc'  style={{backgroundColor:"#ffaaa1"}}>
               <div id='date-time'> 
                  <div id='from-dt'><b>{datetime.map(item => item.ptime)}</b><br/>{datetime.map(item => item.pdate)}</div>
                  <label id='to'>to</label>  
                  <div id='to-dt'><b>{datetime.map(item => item.dtime)}</b><br/>{datetime.map(item => item.ddate)}</div>
               </div>
              </div>
               <div id='price-book'>
                   <div id='price'><b>₹ 1000</b> /day<br/>(tax inlcluded)</div>
                   <div id='book-btn'>
                   <button id='book' style={{color:"#f9c733",backgroundColor:"black"}} onClick={() => { window.alert('Sorry! Bike is not available')}}><s>SOLD OUT</s></button>
                   </div>
               </div>
            
          </div>
        
          <div id='bike-box'>
            <div id='bike-name'><b>HONDA X BLADE</b></div>
            <div id='bike-img'>
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/267/medium/HONDA_X-BLADE.png?1660733037' alt='DIO'></img>
            </div>
            <div id='bike-desc'>
               <div id='date-time'> 
                  <div id='from-dt'><b>{datetime.map(item => item.ptime)}</b><br/>{datetime.map(item => item.pdate)}</div>
                  <label id='to'>to</label>  
                  <div id='to-dt'><b>{datetime.map(item => item.dtime)}</b><br/>{datetime.map(item => item.ddate)}</div>
               </div>
              </div>
               <div id='price-book'>
                   <div id='price'><b>₹ 1100</b> /day<br/>(tax inlcluded)</div>
                   <div id='book-btn'>
                   <a href='/confirm-booking4' ><button id='book'>BOOK</button> </a>
                   </div>
               </div>
            
          </div>
          <div id='bike-box'>
            <div id='bike-name'><b>HONDA UNICORN 150</b></div>
            <div id='bike-img'>
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/062/medium/HONDA_UNICORN_150.png?1660727098' alt='DIO'></img>
            </div>
            <div id='bike-desc'>
               <div id='date-time'> 
                  <div id='from-dt'><b>{datetime.map(item => item.ptime)}</b><br/>{datetime.map(item => item.pdate)}</div>
                  <label id='to'>to</label>  
                  <div id='to-dt'><b>{datetime.map(item => item.dtime)}</b><br/>{datetime.map(item => item.ddate)}</div>
               </div>
              </div>
               <div id='price-book'>
                   <div id='price'><b>₹ 1000</b> /day<br/>(tax inlcluded)</div>
                   <div id='book-btn'>
                   <a href='/confirm-booking5' ><button id='book'>BOOK</button> </a>
                   </div>
               </div>
            
          </div>
          </div> 
          <div id='showcase-3'>
          <div id='bike-box'>
            <div id='bike-name'><b>Bajaj Pulsar NS200</b></div>
            <div id='bike-img'>
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/076/medium/BAJAJ__PULSAR_200NS.png?1660727897' alt='DIO'></img>
            </div>
            <div id='bike-desc'>
               <div id='date-time'> 
                  <div id='from-dt'><b>{datetime.map(item => item.ptime)}</b><br/>{datetime.map(item => item.pdate)}</div>
                  <label id='to'>to</label>  
                  <div id='to-dt'><b>{datetime.map(item => item.dtime)}</b><br/>{datetime.map(item => item.ddate)}</div>
               </div>
              </div>
               <div id='price-book'>
                   <div id='price'><b>₹ 1600</b> /day<br/>(tax inlcluded)</div>
                   <div id='book-btn'>
                   <a href='/confirm-booking6' ><button id='book'>BOOK</button> </a>
                   </div>
               </div>
            
          </div>
          <div id='bike-box'>
            <div id='bike-name'><b>Yamaha FZ</b></div>
            <div id='bike-img'>
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/020/medium/YAMAHA_FZ.png?1660721310' alt='DIO'></img>
            </div>
            <div id='bike-desc'>
               <div id='date-time'> 
                  <div id='from-dt'><b>{datetime.map(item => item.ptime)}</b><br/>{datetime.map(item => item.pdate)}</div>
                  <label id='to'>to</label>  
                  <div id='to-dt'><b>{datetime.map(item => item.dtime)}</b><br/>{datetime.map(item => item.ddate)}</div>
               </div>
              </div>
               <div id='price-book'>
                   <div id='price'><b>₹ 1500</b> /day<br/>(tax inlcluded)</div>
                   <div id='book-btn'>
                   <a href='/confirm-booking7' ><button id='book'>BOOK</button> </a>
                   </div>
               </div>
            
          </div>
          <div id='bike-box'>
            <div id='bike-name'><b>Royal Enfield Himalayan</b></div>
            <div id='bike-img'>
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/014/medium/ROYAL_ENFIELD_HIMALAYAN.png?1660720951' alt='DIO'></img>
            </div>
            <div id='bike-desc'>
               <div id='date-time'> 
                  <div id='from-dt'><b>{datetime.map(item => item.ptime)}</b><br/>{datetime.map(item => item.pdate)}</div>
                  <label id='to'>to</label>  
                  <div id='to-dt'><b>{datetime.map(item => item.dtime)}</b><br/>{datetime.map(item => item.ddate)}</div>
               </div>
              </div>
               <div id='price-book'>
                   <div id='price'><b>₹ 2500</b> /day<br/>(tax inlcluded)</div>
                   <div id='book-btn'>
                   <a href='/confirm-booking8' ><button id='book'>BOOK</button> </a>
                   </div>
               </div>
            
          </div>
          </div> 
          <div id='showcase-4'>
          <div id='bike-box'>
            <div id='bike-name'><b>Royal Enfield Classic 350</b></div>
            <div id='bike-img'>
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/007/medium/ROYAL_ENFIELD_CLASSIC_350.png?1660720171' alt='DIO'></img>
            </div>
            <div id='bike-desc'>
               <div id='date-time'> 
                  <div id='from-dt'><b>{datetime.map(item => item.ptime)}</b><br/>{datetime.map(item => item.pdate)}</div>
                  <label id='to'>to</label>  
                  <div id='to-dt'><b>{datetime.map(item => item.dtime)}</b><br/>{datetime.map(item => item.ddate)}</div>
               </div>
              </div>
               <div id='price-book'>
                   <div id='price'><b>₹ 2250</b> /day<br/>(tax inlcluded)</div>
                   <div id='book-btn'>
                   <a href='/confirm-booking9' ><button id='book'>BOOK</button> </a>
                   </div>
               </div>
            
          </div>
          <div id='bike-box'>
            <div id='bike-name'><b>Royal Enfield Desert Storm 500</b></div>
            <div id='bike-img'>
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/010/medium/ROYAL_ENFIELD_CLASSIC_500_DESERT_STORM.png?1660720375' alt='DIO'></img>
            </div>
            <div id='bike-desc'  style={{backgroundColor:"#ffaaa1"}}>
               <div id='date-time'> 
                  <div id='from-dt'><b>{datetime.map(item => item.ptime)}</b><br/>{datetime.map(item => item.pdate)}</div>
                  <label id='to'>to</label>  
                  <div id='to-dt'><b>{datetime.map(item => item.dtime)}</b><br/>{datetime.map(item => item.ddate)}</div>
               </div>
              </div>
               <div id='price-book'>
                   <div id='price'><b>₹ 2500</b> /day<br/>(tax inlcluded)</div>
                   <div id='book-btn'>
                   <button id='book' style={{color:"#f9c733",backgroundColor:"black"}} onClick={() => { window.alert('Sorry! Bike is not available')}}><s>SOLD OUT</s></button>
                   </div>
               </div>
            
          </div>
          <div id='bike-box'>
            <div id='bike-name'><b>Royal Enfield Bullet 350 (top end)
             </b></div>
            <div id='bike-img'>
            <img src='https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/013/medium/ROYAL_ENFIELD_BULLET_350_%28TOP_END%29.png?1660720877' alt='DIO'></img>
            </div>
            <div id='bike-desc'>
               <div id='date-time'> 
                  <div id='from-dt'><b>{datetime.map(item => item.ptime)}</b><br/>{datetime.map(item => item.pdate)}</div>
                  <label id='to'>to</label>  
                  <div id='to-dt'><b>{datetime.map(item => item.dtime)}</b><br/>{datetime.map(item => item.ddate)}</div>
               </div>
              </div>
               <div id='price-book'>
                   <div id='price'><b>₹ 2500</b> /day<br/>(tax inlcluded)</div>
                   <div id='book-btn'>
                   <a href='/confirm-booking10' ><button id='book'>BOOK</button> </a>
                   </div>
               </div>
            
          </div>
          </div> 
        </div>
        <Footer />
    </div>
  )
}

export default Showcase

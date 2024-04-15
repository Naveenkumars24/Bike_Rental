import React from 'react'
import './Page3.css'
import img1 from './bikenew5.jpg'
import img2 from './bikereview2.webp'
import img3 from './bikenew4.jpg'
import img4 from './bikereview3.png'
import img5 from './bikereview4.webp'
import img6 from './bikenew1.webp'
import img7 from './bikenew2.jpg'
import img8 from './bikenew3.webp'

const Page3 = () => {
  return (
    <>
    <section id='ReviewPage'>
    <div id='page3conatiner' >
      <div id='reviewheading'><h1>Our impact in <span>Numbers !</span></h1></div>
      <div id='imagereview1'>
               <div className='imgview11'><h1>510<span>+</span></h1><p>User trust us</p></div>
               <div className='imgview12'><img src={img1} alt="" /></div>
               <div className='imgview13'><img src={img2} alt="" /></div>
               <div className='imgview14'><h1>500K<span>+</span></h1><p>Kms Travelled</p></div>
      </div>
      <div id='imagereview2'>
               <div className='imgview21' ><img src={img3} alt="" /> </div>
               <div className='imgview22'> <img src={img4} alt="" /></div>
               <div className='imgview23'><img src={img5} alt="" /> </div>
               <div className='imgview24'><img src={img6} alt="" /></div>
      </div>
      <div id='imagereview3'>
               <div className='imgview31'><h1>414<span>+</span></h1><p>App Downloads</p> </div>
               <div className='imgview32'><img src={img7} alt="" /></div>
               <div className='imgview33'><img src={img8} alt="" /></div>
               <div className='imgview34'><h1>100<span>+</span></h1><p>Seamless Booking</p></div>
      </div>
</div>
<div className='reviewbuttoncontainer'>
   <div><h1 class='b'>Share your Experiences </h1></div>
   <a href='/review'><button style={{borderRadius:"10px"}} className='reviewbtn'><b>Click here to share</b></button></a>
   </div>
    </section>
</>    
  )
}
export default Page3


// <img src="bikereview1.jpg" alt="" />
// <img src="bikereview2.webp" alt="" />
// <img src="bikereview3.png" alt="" /> 
// <img src="bikereview4.webp" alt="" /> 
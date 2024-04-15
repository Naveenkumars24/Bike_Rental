import React from 'react'
import './Page2.css'
import ONNations from './ONN-Stations.svg'; 
import SmarterMobility from './Smarter-Mobility.svg';
import FlexibleOwnership from './Flexible-Ownership.svg';
import SafeRides from './Safe-Rides-Icon.svg';


const Page2 = () => {
  return (
    <section id='page2'>
      <div id='aboutus'><h1 id='aboutname'>Why Bike <span>Rentals?</span> </h1>
      <p id='aboutdes'>We simplified bike rentals, so you can focus on what's important to you.</p>
      </div>
      <div id='aboutdescription'>
        
        <div className='features'><img src={SafeRides} alt="" /><br /><h1>Rides <span>Protected </span></h1><br />
        <p>Your safety is our priority. From sanitizing all bikes before every use, to extensive on-ground safety measures, your rides with ONN .</p></div>
        <div className='features'><img src={SmarterMobility} alt="" /><br /><h1>Smarter <span>Mobility</span></h1><br />With your trusty ONN app, you can choose any bike make instant payments, get offers, and manage all aspect of your ONN experience </div>
        <div className='features'><img src={FlexibleOwnership} alt="" /> <br /><h1>Flexible <span>Ownership</span> </h1><br />Enjoy the freedom of owning a two-wheeler without the hefty down-payments, EMIs and paperwork. </div>
        <div className='features'><img src={ONNations} alt="" /><br /><h1>ONN <span>Stations</span></h1><br />Your local ONN Station is here to make ensure your two-wheeler experience is flawless. </div>
      </div>

    </section>
  )
}

export default Page2
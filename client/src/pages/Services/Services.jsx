import React from "react"
import img from "/services.jpg"
import Back from "./Back"

// import "../home/featured/Featured.css"
// import FeaturedCard from "../home/featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Our Services' cover={img} />
        <div className='featured container'>
          {/* <FeaturedCard /> */}
        </div>
      </section>

      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>
            <a href="mailto:user1@gmail.com">Contact Us Today</a>
              
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services

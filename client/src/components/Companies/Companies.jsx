import React from "react";
import './Companies.css'
import CountUp from "react-countup";




const Companies = () => {
  return (
          <>
          <div style={{marginTop: '30px', borderRadius: '5px'}} className="flexCenter stats container paddings">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1800} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={168} /> <span>+</span>
              </span>
              <span className="">Awards Winning</span>
            </div>
          </div> 

    <section className="c-wrapper company">
      <div className="overlay"></div>
      <div className="paddings flexCenter c-container">

          <div className="companies-logo">
              <img src="./prologis.png" alt="" />
              <img src="./tower.png" alt="" />
              <img src="./equinix.png" alt="" />
              <img src="./realty.png" alt="" />
              
          </div>
       </div>
         
        <div className="paddings flexCenter c-container">
            <video src="/video-5.mp4" autoPlay loop muted  className="video"/>
        </div>

    </section>
    </> 
  );
};

export default Companies;

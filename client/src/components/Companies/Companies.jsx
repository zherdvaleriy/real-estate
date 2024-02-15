import React from "react";
import './Companies.css'




const Companies = () => {
  return (
    <section className="c-wrapper company">
      <div className="overlay"></div>
      <div className="paddings flexCenter c-container">

        <div className="companies-logo">
            <img src="./prologis.png" alt="" />
            <img src="./tower.png" alt="" />
            <img src="./equinix.png" alt="" />
            <img src="./realty.png" alt="" />
            
        </div>

        <video src="/video-3.mp4" autoPlay loop muted  className="video"/>
       
      </div>
    </section>
  );
};

export default Companies;

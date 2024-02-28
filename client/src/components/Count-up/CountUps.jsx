import React from 'react'
import CountUp from "react-countup";
import './CountUps.css'




const CountUps = () => {

  return (
    <section>
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
    </section>  
  )
}

export default CountUps
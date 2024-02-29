import React from "react";
// import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import {motion} from 'framer-motion'





const Residencies = () => {

  const {data, isError, isLoading} = useProperties()

  const text = 'Popular Residencies'

  if(isError){
    return (
        <div className="wrapper">
            <span>Error while fetching data</span>
        </div>
    )
}

if(isLoading){

    return (
        <div className="wrapper flexCenter" style={{height: '60vh'}} >
           <PuffLoader
               height="80"
               width="80"
               radius={1}
               color="#4066ff"
               aria-label='puff-oading'
           />
        </div>
    )
}

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>

          {/* <span className="primaryText">Popular Residencies</span> */}
          <div className="primaryText">
            {text.split("").map((letter, index) => (
              <motion.span
                    key={index}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  >
                    {letter}
              </motion.span>
            ))}
        
          </div>


        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {data.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};

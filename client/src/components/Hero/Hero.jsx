import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar.jsx";




const Hero = () => {
  return (
    <section className="hero-wrapper">
   
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Discover <br />
              House of Your
              <br />  <span > Dream</span>
            </motion.h1>
          </div>
          <div className="flexColStart flex-hero-des">
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter " style={{width: '25rem'}}>
            <span className="info-welcome">Welcome to our estate agency, where we specialize in personalized service and expert guidance to help you find the perfect home. With a commitment to integrity and client satisfaction, we are dedicated to making your real estate journey smooth and successful.</span>
          </div>

         {/* <SearchBar/> */}

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./banner3.jpg" alt="houses"  style={{borderRadius: '100px 30px'}}/>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;

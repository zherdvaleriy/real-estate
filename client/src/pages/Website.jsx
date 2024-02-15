
import Chatbot from '../components/Chatbot/Chatbot.jsx'
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";
// import Footer from "../components/Footer/Footer";
// import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import { motion } from "framer-motion";
import Faq from '../components/Faq/Faq.jsx';





const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient"/>
     
      <Hero />
    </div>
      <Companies />
      <Residencies/>
      <Value/>
      <Contact/>
    
        <Chatbot />
    
        <GetStarted/>
        {/* <Faq/> */}

    </div>
  )
}

export default Website
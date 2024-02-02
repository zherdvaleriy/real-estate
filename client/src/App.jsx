import "./App.css";
import {MantineProvider} from '@mantine/core'
import '@mantine/core/styles.css'
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";




function App() {

  return (
    <MantineProvider>


          <div className="App">
              <div>
                <div className="white-gradient"/>
                <Header />
                <Hero />
              </div>
                <Companies />
                <Residencies/>
                <Value/>
                <Contact/>
                <GetStarted/>
                <Footer/>
          </div>


    </MantineProvider>
  );
}

export default App;

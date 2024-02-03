import { Suspense } from "react";
import "./App.css";
import {MantineProvider} from '@mantine/core'
import '@mantine/core/styles.css'
import Website from "./pages/Website"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";




function App() {

  return (
    <MantineProvider>

       <BrowserRouter>
        <Suspense fallback={<di>Loading ...</di>}>
          <Routes>
            <Route element={<Layout/>} >
              <Route path="/" element={<Website/>} />

            </Route>
          </Routes>
        </Suspense>
       </BrowserRouter>

    </MantineProvider>
  );
}

export default App;

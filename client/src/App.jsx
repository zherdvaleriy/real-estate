import { Suspense, useState } from "react";
import "./App.css";
import {MantineProvider} from '@mantine/core'
import '@mantine/core/styles.css'
import Website from "./pages/Website"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Property from "./pages/Property/Property";
import UserDetailContext from "./context/UserDetail";
import Bookings from "./pages/Bookings/Bookings";
import Favorites from "./pages/Favorites/Favorites";
import NotFound from "./pages/NotFound/NotFound";
import Faq from "./components/Faq/Faq";




function App() {
  const queryClient = new QueryClient()
  const [userDetails, setUserDetails] = useState({
    favorites: [],
    bookings: [],
    token: null
  })

  return (
    <MantineProvider >


        <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
          <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Suspense fallback={<div>Loading ...</div>}>
              <Routes>
                <Route element={<Layout/>} >
                  
                  <Route path="/" element={<Website/>} />
                  <Route path="/faq" element={<Faq/>} />
                  <Route path="/properties">
                    <Route index element={<Properties/>} />
                    <Route path=":propertyId" element={<Property/>} />
                  </Route>
                  <Route path="/bookings" element={<Bookings/>} />
                  <Route path="/favorites" element={<Favorites/>} />

                </Route>
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </Suspense>
           </BrowserRouter>
          <ToastContainer/>
          <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </UserDetailContext.Provider>


    </MantineProvider>
  );
}

export default App;

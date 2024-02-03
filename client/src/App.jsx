import { Suspense } from "react";
import "./App.css";
import {MantineProvider} from '@mantine/core'
import '@mantine/core/styles.css'
import Website from "./pages/Website"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
// import {QueryClient, QueryClientProvider} from 'react-query'
// import {ReactQueryDevtools} from 'react-query/devtools'
import { ToastContainer } from "react-toastify";




function App() {
  // const queryClient = new QueryClient()

  return (
    <MantineProvider >

      {/* <QueryClientProvider client={queryClient}> */}
       <BrowserRouter>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route element={<Layout/>} >
              <Route path="/" element={<Website/>} />
              <Route path="/properties" element={<Properties/>} />
            </Route>
          </Routes>
        </Suspense>
       </BrowserRouter>
       <ToastContainer/>
      {/* </QueryClientProvider> */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </MantineProvider>
  );
}

export default App;

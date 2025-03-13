import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home'
import MovieDetails from './components/MovieDetails/MovieDetails'
import MoviePage from './components/MoviePage/MoviePage'
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'
import Layout from './Layout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='moviedetails' element={<MovieDetails />} />
      <Route path='Moviepage' element={<MoviePage />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route path='moviedetails/' element={<MovieDetails />}>
        <Route path=':movieid' element={<MovieDetails />}/>
      </Route>
    </Route>
  ),
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

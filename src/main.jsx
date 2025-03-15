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
import Page404 from './components/404Page/Page404'
import Anime from './components/MoviePage/Anime';
import TvShow from './components/MoviePage/TvShow';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='Moviepage' element={<MoviePage />} />
      <Route path='Anime' element={<Anime />} />
      <Route path='TvShow' element={<TvShow />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route path='moviedetails/' element={<MovieDetails />}>
        <Route path=':movieid' element={<MovieDetails />}/>
      </Route>
      <Route path='*' element={<Page404 />} />
    </Route>
  ),
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

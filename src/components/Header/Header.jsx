import React, { useState } from 'react'
import logo from '../../assets/MalosFlixLogo.png'
import { NavLink } from 'react-router'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <>

      {/* Big Screens */}
      <div className='hidden md:flex flex-row justify-between items-center p-4'>

        {/* left side */}
        <div className='leftSide flex flex-row ml-2 items-center'>
          <a href='/'><img src={logo} alt="logo" className='w-10 h-10 mr-2'/></a>
          <a href='/'>Malos<span className='text-primary'>Flix</span></a>
        </div>

        {/* middle */}
        <div className='middleSide flex flex-row'>
          <ul className='flex flex-row gap-3'>
              <li>
                  <NavLink className="hover:text-primary transition-transform ease-in duration-300" to="/">HOME</NavLink> <span className='ml-2 text-gray-500'>|</span>
              </li>
              <li>
                  <NavLink className="hover:text-primary transition-transform ease-in duration-300" to="/Moviepage">MOVIES</NavLink> <span className='ml-2 text-gray-500'>|</span>
              </li>
              <li>
                  <NavLink className="hover:text-primary transition-transform ease-in duration-300" to="/TvShow">TV SHOW</NavLink> <span className='ml-2 text-gray-500'>|</span>
              </li>
              <li>
                  <NavLink className="hover:text-primary transition-transform ease-in duration-300" to="/Anime">ANIME</NavLink>
              </li>
          </ul>
        </div>

        {/* right side */}
        <div className='rightSide flex flex-row items-center'>

            <div className="flex flex-row items-center">
              <form 
                className="relative flex items-center"
                onSubmit={handleSubmit}
                >
                <button type="submit" className="absolute left-2">
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
                <input
                  className="pl-10 text-primary outline-none border-2 rounded-3xl p-1 placeholder:text-primary relative border-primary bg-inherit"
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  />
              </form>
            </div>
            <button className='ml-2 border-2 border-primary rounded-3xl p-2 text-sm hover:bg-primary hover:text-black hover:transition-transform ease-in-out duration-300'>SIGN IN</button>
          </div>
      </div>


      {/* Mobile heder */}
      <div className='flex md:hidden flex-col justify-center p-2 gap-3'>
        <div className='flex flex-row justify-between items-center gap-1'>

          <div className='leftSide flex flex-row ml-2 items-center'>
            <a href='/'><img src={logo} alt="logo" className='w-10 h-10 mr-2'/></a>
            <a href='/'>Malos<span className='text-primary'>Flix</span></a>
          </div>

          <div className='rightSide flex flex-row items-center'>

          <div className="flex flex-row items-center">
              <form 
                className="relative flex items-center"
                onSubmit={handleSubmit}
                >
                <button type="submit" className="absolute left-2">
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
                <input
                  className="pl-10 text-primary outline-none border-2 rounded-3xl p-1 placeholder:text-primary relative border-primary bg-inherit"
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  />
              </form>
            </div>
            <button className='ml-2 border-2 border-primary rounded-3xl p-2 text-sm hover:bg-primary hover:text-black hover:transition-transform ease-in-out duration-300'>SIGN IN</button>
          </div>
        </div>
        
        <div className='flex flex-row mt-2 justify-center'>
          {/* middle */}
          <div className='middleSide flex flex-row'>
            <ul className='flex flex-row gap-3'>
                <li>
                    <NavLink to="/">HOME</NavLink> <span className='ml-2 text-gray-500'>|</span>
                </li>
                <li>
                    <NavLink to="/Moviepage">MOVIES</NavLink> <span className='ml-2 text-gray-500'>|</span>
                </li>
                <li>
                    <NavLink to="/TvShow">TV SHOW</NavLink> <span className='ml-2 text-gray-500'>|</span>
                </li>
                <li>
                    <NavLink to="/Anime">ANIME</NavLink>
                </li>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Header

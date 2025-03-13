import React from 'react'
import logo from '../../assets/MalosFlixLogo.png'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <>

      {/* Big Screens */}
      <div className='hidden md:flex flex-row justify-between items-center p-2'>

        {/* left side */}
        <div className='leftSide flex flex-row ml-2 items-center'>
          <img src={logo} alt="logo" className='w-10 h-10 mr-2'/>
          <h4>Malos<span className='text-primary'>Flix</span></h4>
        </div>

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
                  <NavLink to="/Moviepage">TV SHOW</NavLink> <span className='ml-2 text-gray-500'>|</span>
              </li>
              <li>
                  <NavLink to="/Moviepage">ANIME</NavLink>
              </li>
          </ul>
        </div>

        {/* right side */}
        <div className='rightSide flex flex-row items-center'>

            <div className='flex flex-row items-center'>
                <input className='text-primary outline-none bg-zinc-900  border-2 rounded-3xl p-1 pl-6 placeholder:text-primary relative border-primary' type="text" name="search" id="seach" placeholder='Search...'/>
                <svg className="block absolute size-6 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            
            <div className='flex flex-row ml-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                </svg>
                <p className='flex flex-row'>EN
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </p>
            </div>
            <button className='ml-2 border-2 border-primary rounded-3xl p-2 text-sm hover:bg-primary hover:text-black hover:transition-transform ease-in-out duration-300'>SIGN IN</button>
          </div>
      </div>


      {/* Mobile heder */}
      <div className='flex md:hidden flex-col justify-center p-2 gap-3'>
        <div className='flex flex-row justify-between items-center gap-1'>

          <div className='leftSide flex flex-row ml-2 items-center '>
            <img src={logo} alt="logo" className='w-10 h-10 mr-2'/>
            <h4>Malos<span className='text-primary'>Flix</span></h4>
          </div>

          <div className='rightSide flex flex-row items-center'>

            <div className='flex flex-row items-center'>
                <input className='text-primary outline-none bg-zinc-900  border-2 rounded-3xl p-1 pl-6 placeholder:text-primary relative border-primary' type="text" name="search" id="seach" placeholder='Search...'/>
                <svg className="block absolute size-6 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            
            <div className='flex flex-row ml-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                </svg>
                <p className='flex flex-row'>EN
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </p>
            </div>
            <button className='ml-2 border-2 border-primary rounded-3xl p-2 text-sm hover:bg-primary hover:text-black hover:transition-transform ease-in-out duration-300'>SIGN IN</button>
          </div>
        </div>
        
        <div className='flex flex-row mt-2'>
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
                    <NavLink to="/Moviepage">TV SHOW</NavLink> <span className='ml-2 text-gray-500'>|</span>
                </li>
                <li>
                    <NavLink to="/Moviepage">ANIME</NavLink>
                </li>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Header

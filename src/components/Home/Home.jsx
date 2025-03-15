import React from 'react'
import LatestMovies from './LatestMovies'
import RecommendedMovies from './RecommendedMovies'
import LatestSeries from './LatestSeries'

const Home = () => {
  return (
    <div className='mt-40 w-full'>

      {/* Home bg */}
      <div className='pl-10'>
        <p className='text-primary font-frenchCanon text-xl'>MalosFlix</p>
        <p className='font-homenaje text-4xl'>Unlimited <span className='text-primary'>Entertainment</span>,<br/>Movies, TVs shows, & More.</p>
        <div className='flex flex-row mt-3 items-center'>
          <p className='bg-white text-black p-1'>Movie</p>
          <p className='border ml-2 pl-2 pr-2'>HD</p>
          <p className='ml-2'>Action, Drama</p>
          <p className='flex flex-row ml-3'>
              <svg  className="text-primary size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
              2023
            </p>
        </div>
        <button className="flex items-center mt-4 ml-2 border-2 border-primary rounded-3xl p-2 text-sm hover:bg-primary hover:text-black hover:transition-transform ease-in-out duration-300 group">
          <svg className="size-6 text-primary transition-colors duration-300 group-hover:text-black" 
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
          PLAY NOW
        </button>

      </div>

      
      <RecommendedMovies />

      <LatestMovies />

      <LatestSeries />
      
    </div>
  )
}

export default Home

import React from 'react'
import LatestMovies from './LatestMovies'
import RecommendedMovies from './RecommendedMovies'
import LatestSeries from './LatestSeries'

const Home = () => {
  return (
    <div className='mt-40 w-full'>

      {/* Home bg */}
      <div className='pl-10 pr-10 flex justify-between flex-row'>
        <div>
          <p className='text-primary font-frenchCanon text-xl'>ONLINE STREAMING</p>
          <p className='font-homenaje text-5xl'>Unlimited <span className='text-primary'>Entertainment</span>,<br/>Movies, TVs shows, & More.</p>
        </div>
      </div>

      
      <RecommendedMovies />

      <LatestMovies />

      <LatestSeries />
      
    </div>
  )
}

export default Home

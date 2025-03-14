import React from 'react'
import freeGuy from '../../img/freeGuy.png'


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
          <p className='ml-2'>2023</p>
        </div>
        <button className="flex items-center mt-4 ml-2 border-2 border-primary rounded-3xl p-2 text-sm hover:bg-primary hover:text-black hover:transition-transform ease-in-out duration-300 group">
          <svg className="size-6 text-primary transition-colors duration-300 group-hover:text-black" 
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
          PLAY NOW
        </button>

      </div>

      {/* Movies Sections */}
      <div className='flex flex-col p-10 bg-b bg-gradient-to-b from-black to-gray-900 min-h-screen'>
        <div className='flex flex-col mt-5'>
          <p className='text-primary'>ONLINE STREAMING</p>
          <div className='flex flex-row justify-between mt-3 mb-2'>
            <p>Movies</p>
            <div>
              <button className='bg-zinc-950 mr-3 pl-4 pr-4 pt-1 pb-1 rounded-3xl hover:border hover:border-primary'>Movies</button>
              <button className='bg-zinc-950 mr-3 pl-4 pr-4 pt-1 pb-1 rounded-3xl hover:border hover:border-primary'>TV Shows</button>
              <button className='bg-zinc-950 mr-3 pl-4 pr-4 pt-1 pb-1 rounded-3xl hover:border hover:border-primary'>Anime</button>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-4 mt-4'>
          {/* Cards */}
          <div className='card'>
            <div className="w-60">
              <img src={freeGuy} className="w-full" />
              <div className="flex flex-row justify-between items-center mt-4">
                <p className="truncate font-electrolize">Free Guy</p>
                <p className="whitespace-nowrap">2023</p>
              </div>
            </div>


            <div className="w-60 p-2 flex flex-row justify-between items-center">
              <p className="border px-2 flex-shrink-0">HD</p>
              <div className="flex flex-row items-center gap-x-2 overflow-hidden">
                <p className="whitespace-nowrap">130 min</p>
                <p className="flex items-center">
                  <svg className="text-primary size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  7.0
                </p>
              </div>
            </div> 
          </div>

          <div className='card'>
            <div className="w-60">
              <img src={freeGuy} className="w-full" />
              <div className="flex flex-row justify-between items-center mt-4">
                <p className="truncate font-electrolize">Free Guy</p>
                <p className="whitespace-nowrap">2023</p>
              </div>
            </div>

            <div className="w-60 p-2 flex flex-row justify-between items-center">
              <p className="border px-2 flex-shrink-0">HD</p>
              <div className="flex flex-row items-center gap-x-2 overflow-hidden">
                <p className="whitespace-nowrap">130 min</p>
                <p className="flex items-center">
                  <svg className="text-primary size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  7.0
                </p>
              </div>
            </div> 
          </div>

          <div className='card'>
            <div className="w-60">
              <img src={freeGuy} className="w-full" />
              <div className="flex flex-row justify-between items-center mt-4">
                <p className="truncate font-electrolize">Free Guy</p>
                <p className="whitespace-nowrap">2023</p>
              </div>
            </div>


            <div className="w-60 p-2 flex flex-row justify-between items-center">
              <p className="border px-2 flex-shrink-0">HD</p>
              <div className="flex flex-row items-center gap-x-2 overflow-hidden">
                <p className="whitespace-nowrap">130 min</p>
                <p className="flex items-center">
                  <svg className="text-primary size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  7.0
                </p>
              </div>
            </div> 
          </div>

          <div className='card'>
            <div className="w-60">
              <img src={freeGuy} className="w-full" />
              <div className="flex flex-row justify-between items-center mt-4">
                <p className="truncate font-electrolize">Free Guy</p>
                <p className="whitespace-nowrap">2023</p>
              </div>
            </div>


            <div className="w-60 p-2 flex flex-row justify-between items-center">
              <p className="border px-2 flex-shrink-0">HD</p>
              <div className="flex flex-row items-center gap-x-2 overflow-hidden">
                <p className="whitespace-nowrap">130 min</p>
                <p className="flex items-center">
                  <svg className="text-primary size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  7.0
                </p>
              </div>
            </div> 
          </div>
           
          
          
        </div>

        <div className='flex flex-col mt-5'>
        
        </div>
        
      </div>

      
      
    </div>
  )
}

export default Home

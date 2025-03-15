import React from 'react'
import profpic from '../../img/profpic.png'
import useSWR from 'swr';
import PlayLogo from '../../assets/MalosFlixLogo.png'


const API_KEY = "971af93c";

const RECOMMENDED_MOVIES = [
    "tt0111162", "tt0068646", "tt0468569", "tt0071564", "tt0108052", 
    "tt0050083", "tt0167260", "tt0110912", "tt1375666", "tt0137523", 
    "tt0120737", "tt0080684", "tt0109830", "tt0245429", "tt1853728"
];

const fetcher = (url) => fetch(url).then((res) => res.json());


const useRecommendedMovies =() => {

    const fetchMovies = RECOMMENDED_MOVIES.map((id) =>
        useSWR(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`, fetcher, { refreshInterval: 5000 })
    );

    const movies = fetchMovies.map(({data}) => data).filter(Boolean)

    const loading = fetchMovies.some(({data}) => !data)

    const error = fetchMovies.some(({ error }) => error)

    return { movies, loading, error}

}

const MovieDetails = () => {

  const { movies, loading, error } = useRecommendedMovies();

  if(loading) return <p>Loading</p>
  if(error) return <p>Error fetching recommended movies.</p>

  return (
    <>
      <div className=' md:flex flex-row mt-7 w-full justify-center gap-20 pl-10 pr-10 mb-10'>

        <div className='relative group'>
          <img 
            src={profpic} 
            className='justify-self-center md:justify-start cursor-pointer min-w-10 w-full relative hover:opacity-30'
            onContextMenu={(e) =>e.preventDefault()}
            onDragStart={(e) => e.preventDefault()} />
          <img
            src={PlayLogo}
            className="absolute inset-0 w-12 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-100 cursor-pointer"
            onContextMenu={(e) =>e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />  
        </div>  

        <div className='flex flex-col'>

          <div>
            <p className='font-Gurajada text-8xl'>Free Guy,</p>
          </div>  

          <div className='flex flex-row mt-3 items-center'>
            <p className='bg-white text-black p-1 mr-3'>Movie</p>
            <p className='border ml-2 pl-2 pr-2 items-center'>HD</p>
            <p className='ml-2'>Action, Drama, Adventure, Science fiction</p>
            <p className='flex flex-row ml-3 flex-shrink-0'>
              <svg className="text-primary size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              130 min
            </p>
            <p className='flex flex-row ml-3'>
              <svg  className="text-primary size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
              2023
            </p>
          </div>

          <div className='flex flex-row mt-7 bg-zinc-600 rounded-lg p-3 gap-10 w-fit items-center'>

            <div className='flex flex-col items-center hover:cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
              </svg>

              <p>Share</p>
            </div>

            <div className='flex flex-col items-center hover:cursor-pointer'>
              <p>Rate The Show</p>
              <p className='flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                7.0
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

        </div>
      </div>
      
      
      {/* movies */}

      <div className='flex flex-col p-10 bg-b bg-gradient-to-b from-black to-gray-900 min-h-screen'>
        <div className='flex flex-col mt-5'>
          <div className='flex flex-col mt-5'>
            <p className='text-primary'>Latest Movies</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          {movies.map((movie) => (<div
            className="card p-2 flex flex-col"
            key={movie.imdbID}
            >
              <div className="relative group">
                <div className="relative w-full h-64">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-full object-cover rounded-md group-hover:opacity-30 transition-opacity duration-100"
                  />
                  <img
                    src={PlayLogo}
                    className="absolute inset-0 w-10 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between items-center mt-4">
                <p className="truncate font-electrolize text-white">
                  {movie.Title}
                </p>
                <p className="whitespace-nowrap text-primary">
                  {movie.Year}
                </p>
              </div>

              <div className="p-2 flex flex-row justify-between items-center">
                <p className="border px-2 flex-shrink-0">HD</p>
                <div className="flex flex-row items-center gap-x-2 overflow-hidden">
                  <p className="whitespace-nowrap">{movie.Runtime}</p>
                  <p className="flex items-center">
                    <svg
                      className="text-primary size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {movie.imdbRating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MovieDetails

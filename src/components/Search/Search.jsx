import React from 'react'
// import placeholderImage from '../../assets/imageplaceholder.png'
import Poster from '../../img/freeGuy.png'
import PlayLogo from '../../assets/MalosFlixLogo.png'

const Search = () => {
  return (
    <div className='m-10 mt-7 flex flex-col'>
        <h3 className='mb-5'>Search Results for: "QUERY"</h3>
        <div className="custom-grid grid gap-4 mt-4 pl-5 pr-5">
            <div
                className="card w-fit cursor-pointer"
                // key={movie.imdbID}
                // onClick={() => handleMovie(movie)}
            >
                <div className="relative group h-60 ">
                    <img
                        src={Poster}
                        // alt={movie.Title}
                        className="h-full rounded-md group-hover:opacity-30 transition-opacity duration-100"
                    />
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <img
                        src={PlayLogo}
                        className="absolute w-10 opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                        />
                        <p className="truncate font-electrolize text-white self-end font-bold group-hover:text-primary">movie.Title</p>
                    </div>        
                </div>           
            </div>
            
        </div>       
        
    </div>
  )
}

export default Search

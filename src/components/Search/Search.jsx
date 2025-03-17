import React, { useEffect, useState } from 'react';
import placeholderImage from '../../assets/imageplaceholder.png';
import PlayLogo from '../../assets/MalosFlixLogo.png';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';

const API_KEY = "971af93c";

const Search = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      setError('Search query is missing');
      setLoading(false);
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setMovies([]);
        setError(null);

        const response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
        const data = await response.json();

        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setError('No movies found');
        }
      } catch (err) {
        setError('Error fetching movie data ',err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const handleMovie = (movie) => {
    if (!movie?.imdbID) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/moviedetails/${movie.imdbID}`);
  };

  return (
    <div className='m-10 mt-7 flex flex-col'>
      <h3 className='mb-5'>Search Results for: {searchQuery}</h3>
      <div className="custom-grid grid gap-4 mt-4 pl-5 pr-5">
        {loading && <div className="flex justify-center items-center h-screen"><l-metronome size="40" speed="1.6" color="#CCFF00"></l-metronome></div>}
        {error ? (
          <p>{error}</p>
        ) : (
          movies && movies.map((movie) => (
            <div
              className="card w-fit cursor-pointer"
              key={movie.imdbID}
              onClick={() => handleMovie(movie)}
            >
              <div className="relative group h-60 ">
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : placeholderImage}
                  alt={movie.Title}
                  className="h-full rounded-md group-hover:opacity-30 transition-opacity duration-100"
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <img
                    src={PlayLogo}
                    className="absolute w-10 opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                  />
                  <p className="truncate font-electrolize text-white self-end font-bold group-hover:text-primary">{movie.Title}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;

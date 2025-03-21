import React from 'react';
import PlayLogo from '../../assets/MalosFlixLogo.png';
import useSWR from 'swr';
import { metronome } from 'ldrs';
import { useNavigate } from 'react-router-dom';

metronome.register();

const RECOMMENDED_MOVIES = [
    "tt0111162", "tt0068646", "tt0468569", "tt0071564", "tt0108052",
    "tt0050083", "tt0167260", "tt0110912", "tt1375666", "tt0137523",
    "tt0120737", "tt0080684", "tt0109830", "tt0245429", "tt1853728"
];


const fetcher = (url) => fetch(url).then((res) => res.json());
const useRecommendedMovies = () => {
    const { data, error } = useSWR(
        RECOMMENDED_MOVIES.map((id) => `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`),
        async (urls) => {
            const responses = await Promise.all(urls.map(url => fetcher(url)));
            console.log({responses})
            return responses.filter(movie => movie && movie.Poster && movie.imdbID);
        }
    );

    return {
        movies: data || [],
        loading: !data && !error,
        error,
    };
};

const RecommendedMovies = () => {
    const navigate = useNavigate();
    const { movies, loading, error } = useRecommendedMovies();

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen">
                <l-metronome size="40" speed="1.6" color="#CCFF00"></l-metronome>
            </div>
        );

    if (error) {
        console.error({error})
        return <p className="text-red-500 text-center">Error fetching recommended movies.</p>
    };


    const handleMovie = (movie) => {
        if (!movie?.imdbID) return;
  
        window.scrollTo({ top:0, behavior:'smooth'})
  
        navigate(`/moviedetails/${movie.imdbID}`);
    };

    return (
        <div className='flex flex-col p-10 bg-b bg-gradient-to-b from-black to-gray-900 min-h-screen'>
            <div className='flex flex-col mt-5'>
                <p className='text-primary'>Recommended</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
                {movies.map((movie) => (
                    <div
                        className="card p-2 flex flex-col cursor-pointer"
                        key={movie.imdbID}
                        onClick={() => handleMovie(movie)}
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
                            <p className="truncate font-electrolize text-white">{movie.Title}</p>
                            <p className="whitespace-nowrap text-primary">{movie.Year}</p>
                        </div>

                        <div className="p-2 flex flex-row justify-between items-center">
                            <p className="border px-2 flex-shrink-0">HD</p>
                            <div className="flex flex-row items-center gap-x-2 overflow-hidden">
                                <p className="whitespace-nowrap">{movie.Runtime || "N/A"}</p>
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
                                    {movie.imdbRating || "N/A"}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedMovies;

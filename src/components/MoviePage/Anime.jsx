import React, { useState, useEffect } from "react";
import useSWR from "swr";
import PlayLogo from "../../assets/MalosFlixLogo.png";
import placeholderImage from "../../assets/imageplaceholder.png"; // Import placeholder image
import { metronome } from 'ldrs';
import { useNavigate } from "react-router";

metronome.register()

const API_KEY = "971af93c";

// Fetch function for anime list
const fetcher = (url) => fetch(url).then((res) => res.json());

// Fetch function for individual anime details (Runtime, Rating)
const fetchAnimeDetails = (imdbID) => {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
        .then((res) => res.json());
};

const useAnime = () => {
    const movieUrls = [
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=anime&type=movie&page=1`,
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=anime&type=movie&page=2`,
    ];

    const seriesUrls = [
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=anime&type=series&page=1`,
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=anime&type=series&page=2`,
    ];

    const { data: movieData, error: movieError } = useSWR(movieUrls, async (urls) => {
        const responses = await Promise.all(urls.map((url) => fetcher(url)));
        return responses.flatMap((response) => response.Search || []);
    });

    const { data: seriesData, error: seriesError } = useSWR(seriesUrls, async (urls) => {
        const responses = await Promise.all(urls.map((url) => fetcher(url)));
        return responses.flatMap((response) => response.Search || []);
    });

    return {
        animes: [...(movieData || []), ...(seriesData || [])],
        loading: !movieData && !seriesData && !(movieError || seriesError),
        error: movieError || seriesError,
    };
};

const AnimePage = () => {
    const navigate = useNavigate();
    const { animes, loading, error } = useAnime();

    const [animeDetails, setAnimeDetails] = useState({});

    useEffect(() => {
        // Fetch additional details for each anime (like runtime and rating)
        if (animes.length > 0) {
            animes.forEach(async (anime) => {
                if (anime?.imdbID && !animeDetails[anime.imdbID]) {
                    const details = await fetchAnimeDetails(anime.imdbID);
                    setAnimeDetails((prevDetails) => ({
                        ...prevDetails,
                        [anime.imdbID]: details,
                    }));
                }
            });
        }
    }, [animes]);

    if (loading) return <div className="flex justify-center items-center h-screen"><l-metronome size="40" speed="1.6" color="#CCFF00"></l-metronome></div>;
    if (error) return <p>Error fetching Anime...</p>;

    const handleMovie = (movie) => {
        if (!movie?.imdbID) return;
  
        window.scrollTo({ top:0, behavior:'smooth'})
  
        navigate(`/moviedetails/${movie.imdbID}`);
    };

    const handleImageError = (e) => {
        e.target.onerror = null; // Prevent infinite loop if the placeholder also fails
        e.target.src = placeholderImage; // Set to placeholder image if the original fails to load
    };

    // Filter out runtimes that are unreasonably short (e.g., under 20 minutes)
    const filterRuntime = (runtime) => {
        const runtimeInMinutes = parseInt(runtime, 10);
        return isNaN(runtimeInMinutes) || runtimeInMinutes > 20;  // Only show movies with more than 20 minutes
    };

    return (
        <div className="flex flex-col p-10 bg-gradient-to-b from-black to-gray-900 min-h-screen">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between mt-3 mb-2">
                    <p className="text-primary text-lg">Watch Animes</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
                {animes.slice(0, 36).map((anime) => (
                    // Only render cards where the Poster exists and runtime is above threshold
                    anime.Poster !== "N/A" && filterRuntime(animeDetails[anime.imdbID]?.Runtime) ? (
                        <div 
                            className="card p-2 flex flex-col" 
                            key={anime.imdbID}
                            onClick={() => handleMovie(anime)}
                        >
                            <div className="relative group">
                                <div className="relative w-full h-64">
                                    <img
                                        src={anime.Poster} 
                                        alt={anime.Title}
                                        className="w-full h-full object-cover rounded-md group-hover:opacity-30 transition-opacity duration-100"
                                        onError={handleImageError} // Handle error for missing images
                                    />
                                    <img
                                        src={PlayLogo}
                                        className="absolute inset-0 w-10 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row justify-between items-center mt-4">
                                <p className="truncate font-electrolize text-white">{anime.Title}</p>
                                <p className="whitespace-nowrap text-primary">{anime.Year}</p>
                            </div>

                            <div className="p-2 flex flex-row justify-between items-center">
                                <p className="border px-2 flex-shrink-0">HD</p>
                                <div className="flex flex-row items-center gap-x-2 overflow-hidden">
                                    <p className="whitespace-nowrap">{animeDetails[anime.imdbID]?.Runtime || 'N/A'}</p>
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
                                        {animeDetails[anime.imdbID]?.imdbRating || 'N/A'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : null  // Don't render the card if Poster is not available or runtime is too short
                ))}
            </div>
        </div>
    );
};

export default AnimePage;

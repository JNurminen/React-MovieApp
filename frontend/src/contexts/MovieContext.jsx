import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem('favorites');

        if(storedFavs) setFavorites(JSON.parse(storedFavs));        
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])

    // Add to favorites
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]);
    }

    // Remove from favorites
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    // Check if movie is in favorites
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    // Context value
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
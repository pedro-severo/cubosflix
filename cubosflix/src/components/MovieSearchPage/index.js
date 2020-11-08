import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getOrSearchMoviesByNameOrGenre } from "../../functions/getOrSearchMoviesByNameOrGenre"
import { useForm } from "../../hooks/useForm"
import GenreListOptions from "../GenreListOptions"
import MovieCard from "../MovieCard"
import { goToMovieDetailPage } from "../Router/routeActions"


const MovieSearchPage = () => {
    const history = useHistory()
    const [movieList, setMovieList ] = useState(null)
    const {form, onChange} = useForm({
        movieName: "",
        genre: ""
    })

    useEffect(() => {
        const { movieName, genre } = form

        getOrSearchMoviesByNameOrGenre(movieName, genre).then(response => {
            setMovieList(response)
        })

    }, [form.movieName, form.genre]);

    const handleMovieCardClick = (movieId) => {
        goToMovieDetailPage(history, movieId)
    }

    return (
        <div>
            <form>
                <input name="movieName" value={form.movieName} onChange={onChange} />
                <GenreListOptions 
                    form={form}
                    onChange={onChange}
                />
            </form>
            {movieList && movieList.map(movie => {
                return <MovieCard 
                    key={movie.id} 
                    movieInfos={movie}
                    handleMovieCardClick={handleMovieCardClick}
                />
            })}
        </div>
    )
}

export default MovieSearchPage
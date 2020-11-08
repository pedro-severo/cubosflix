import React, { useEffect, useState } from "react"
import { getOrSearchMoviesByNameOrGenre } from "../../functions/getOrSearchMoviesByNameOrGenre"
import { useForm } from "../../hooks/useForm"
import GenreListOptions from "../GenreListOptions"
import MovieCard from "../MovieCard"


const MovieSearchPage = () => {
    const [movieList, setMovieList ] = useState(undefined)
    const {form, onChange} = useForm({
        movieName: "",
        genre: ""
    })

    useEffect(() => {
        const { movieName, genre } = form

        getOrSearchMoviesByNameOrGenre(movieName, genre).then(response => {
            setMovieList(response)
        })

    }, [form.movieName, form.genre])

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
                return <MovieCard key={movie.id} movieInfos={movie}/>
            })}
        </div>
    )
}

export default MovieSearchPage
import axios from "axios"
import React, { useEffect, useState } from "react"
import { getOrSearchMovies } from "../../functions/getOrSearchMovies"
import { useForm } from "../../hooks/useForm"
import { useRequestData } from "../../hooks/useRequestData"


const MovieSearchPage = () => {
    const [movieList, setMovieList ] = useState(undefined)
    const {form, onChange} = useForm({
        movieName: "",
        genre: ""
    })

    useEffect(() => {
        getOrSearchMovies(form.movieName).then(response => {
            setMovieList(response)
        })

    }, [form.movieName])

    return (
        <div>
            <form>
                <input name="movieName" value={form.movieName} onChange={onChange} />
                <select name="genre" value={form.genre} onChange={onChange} >
                    <option value=""></option>
                    <option value="Terror">Terror</option>
                </select>
            </form>
            {movieList && movieList.map(movie => {
                return <p>{movie.title}</p>
            })}
        </div>
    )
}

export default MovieSearchPage
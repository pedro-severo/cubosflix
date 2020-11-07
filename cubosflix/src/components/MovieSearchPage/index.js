import React, { useState } from "react"
import { useForm } from "../../hooks/useForm"
import { useRequestData } from "../../hooks/useRequestData"


const MovieSearchPage = () => {
    const {form, onChange} = useForm({
        movieName: "",
        genre: ""
    })

    const ratedMovies = useRequestData("https://api.themoviedb.org/3/movie/top_rated?api_key=883ee274b7ce2d49978875c3d25de159&page=1", {})

    console.log(ratedMovies.results)

    return (
        <div>
            <form>
                <input name="movieName" value={form.movieName} onChange={onChange} />
                <select name="genre" value={form.genre} onChange={onChange} >
                    <option value=""></option>
                    <option value="Terror">Terror</option>
                </select>
            </form>
        </div>
    )
}

export default MovieSearchPage
import React, { useEffect, useState } from "react"
import { getOrSearchMovies } from "../../functions/getOrSearchMovies"
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
        getOrSearchMovies(form.movieName).then(response => {
            setMovieList(response)
        })

    }, [form.movieName])


    // TODO: Filtrar por genero de forma independente da filtragem por nome
    // useEffect(() => {
    //     if(form.genre) {
    //         const filteredMovieList = movieList.filter(movie => {
    //             for (let id of movie.genre_ids) {
    //                 if (id === form.genre) {
    //                     return true
    //                 }
    //             }
    //         })

    //         setMovieList(filteredMovieList)
    //     }
    // }, [form.genre])

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
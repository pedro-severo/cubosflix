import React, {useState, useEffect} from "react"

import {GenreListContainer, GenreItem } from "./styles"

import { getGenreList } from "../../functions/getGenreList"

function MovieGenreTopics({genreIds}) {
    const [genreList, setGenreList] = useState(undefined)

    useEffect(() => {
        getGenreList().then(response => {
            setGenreList(response)
        })
    })
    return (
        <GenreListContainer>
            {genreList && genreList.filter(genre => {
                for (let id of genreIds) {
                    if (id === genre.id) {
                        return true
                    } 
                }
            }).map(movie => {
                return <GenreItem key={movie.id}>{movie.name}</GenreItem>
            })}
        </GenreListContainer>
    )
}

export default MovieGenreTopics
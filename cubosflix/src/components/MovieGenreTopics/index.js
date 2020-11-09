import React, {useState, useEffect} from "react"

import {GenreListContainer, GenreItem } from "./styles"

import { getGenreList } from "../../functions/getGenreList"

function MovieGenreTopics({genreIds, marginLeft}) {
    const [genreList, setGenreList] = useState(undefined)

    useEffect(() => {
        getGenreList().then(response => {
            setGenreList(response)
        })
    }, [setGenreList, getGenreList])

    return (
        <GenreListContainer marginLeft={marginLeft} >
            {genreList && genreList.filter(genre => {
                for (let id of genreIds) {
                    
                    if (id === genre.id) {
                        return true
                    } 
                }
            }).map(genre => {
                return <GenreItem key={genre.id}>{genre.name}</GenreItem>
            })}
        </GenreListContainer>
    )
}

export default MovieGenreTopics
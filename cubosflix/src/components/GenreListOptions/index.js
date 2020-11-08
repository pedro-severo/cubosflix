import React, { useEffect, useState } from "react";
import { getGenreList } from "../../functions/getGenreList";

function GenreListOptions({form, onChange}) {
    const [genreList, setGenreList] = useState(undefined)

    useEffect(() => {
        getGenreList().then(response => {
            setGenreList(response)
        })
    })
 
    return (
        <select name="genre" value={form.genre} onChange={onChange} >
            <option value=""></option>
            {genreList && genreList.map(genre => {
                return <option key={genre.id} value={genre.id}>{genre.name}</option>
            })}
        </select>
    )
}

export default GenreListOptions


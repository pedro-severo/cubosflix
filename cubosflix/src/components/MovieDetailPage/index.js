import React from "react"
import {useParams} from "react-router-dom"
import { useRequestData } from "../../hooks/useRequestData"
import { API_KEY, BASE_URL } from "../../constants"
import MovieDetailCard from "../MovieDetailCard"


const MovieDetailPage = () => {
    const pathParams = useParams()
    const movieDetails = useRequestData(`${BASE_URL}/movie/${pathParams.movieId}?api_key=${API_KEY}`, null)

    return (
        <div>
            {movieDetails && 
                <MovieDetailCard
                    movieDetails={movieDetails}
                />
            }
        </div>
    )
}

export default MovieDetailPage
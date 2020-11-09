import React from "react"
import {useParams} from "react-router-dom"
import { useRequestData } from "../../hooks/useRequestData"
import { API_KEY, BASE_URL } from "../../constants"
import MovieDetailCard from "../MovieDetailCard"
import { MovieDetailPageContainer } from "./styles"


const MovieDetailPage = () => {
    const pathParams = useParams()
    const movieDetails = useRequestData(`${BASE_URL}/movie/${pathParams.movieId}?api_key=${API_KEY}`, null)

    return (
        <MovieDetailPageContainer>
            {movieDetails && 
                <MovieDetailCard
                    movieDetails={movieDetails}
                />
            }
        </MovieDetailPageContainer>
    )
}

export default MovieDetailPage
import React from "react"


const MovieDetailCard = ({movieDetails}) => {
    
    return (
        <div>
            <p>{movieDetails.original_title}</p>
            <p>{movieDetails.overview}</p>
            <p>{movieDetails.release_date}</p>
            <p>{movieDetails.status}</p>
            <p>{movieDetails.original_language}</p>
            <p>{movieDetails.runtime}</p>
            <p>{movieDetails.budget}</p>
            <p>{movieDetails.revenue}</p>
            <p>{movieDetails.vote_average}</p>
        </div>
    )
}

export default MovieDetailCard
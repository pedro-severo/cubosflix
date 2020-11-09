import React from "react"

import { BASE_IMAGE_PATH } from "../../constants"

import MovieGenreTopics from "../MovieGenreTopics"

import { MovieCardContainer, ImageContainer, MovieInfosContainer, 
    TitleContainer, ReleaseDateContainer, VoteAverageContainer, 
    OverviewContainer, TitleText
} from "./styles"

function MovieCard({movieInfos, handleMovieCardClick}) {
    return (
        <MovieCardContainer onClick={() => handleMovieCardClick(movieInfos.id)} >
            <ImageContainer src={`${BASE_IMAGE_PATH}/${movieInfos.poster_path}`}  />
            <MovieInfosContainer>
                <TitleContainer >
                    <TitleText>{movieInfos.original_title}</TitleText>
                </TitleContainer>
                <div>
                    <ReleaseDateContainer>
                        <p>{movieInfos.release_date}</p>
                    </ReleaseDateContainer>  
                    <OverviewContainer>{movieInfos.overview}</OverviewContainer>
                    <MovieGenreTopics genreIds={movieInfos.genre_ids} marginLeft={"2vw"}/>    
                </div>
                <VoteAverageContainer>{movieInfos.vote_average}</VoteAverageContainer>      
            </MovieInfosContainer>
        </MovieCardContainer>
    )
}

export default MovieCard
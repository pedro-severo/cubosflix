import React from "react"

import { BASE_IMAGE_PATH } from "../../constants"

import MovieGenreTopics from "../MovieGenreTopics"

import { MovieCardContainer, ImageContainer, MovieInfosContainer, 
    TitleContainer, ReleaseDateContainer, VoteAverageContainer, OverviewContainer
} from "./styles"

// TODO: 
// 1 - CSS: esconder linhas dos textos de descricao dos filmes

function MovieCard({movieInfos, handleMovieCardClick}) {
    return (
        <MovieCardContainer onClick={() => handleMovieCardClick(movieInfos.id)} >
            <ImageContainer src={`${BASE_IMAGE_PATH}/${movieInfos.poster_path}`}  />
            <MovieInfosContainer>
                <TitleContainer >
                    <h4>{movieInfos.original_title}</h4>
                </TitleContainer>
                <div>
                    <ReleaseDateContainer>
                        <p>{movieInfos.release_date}</p>
                    </ReleaseDateContainer>  
                    <OverviewContainer>{movieInfos.overview}</OverviewContainer>
                    <MovieGenreTopics genreIds={movieInfos.genre_ids} />    
                </div>
                <VoteAverageContainer>{movieInfos.vote_average}</VoteAverageContainer>      
            </MovieInfosContainer>
        </MovieCardContainer>
    )
}

export default MovieCard
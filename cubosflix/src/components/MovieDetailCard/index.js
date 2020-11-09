import React from "react"
import { BASE_IMAGE_PATH } from "../../constants"
import MovieGenreTopics from "../MovieGenreTopics"
import InfoWrapper from "./InfoWrapper"
import { 
    CardBodyContainer, CardHeaderContainer, CardImageContainer, 
    CardInfosContainer, InfosContainer, InfoWrapperFlex, MovieDetailCardContainer, 
    StyledLine, SynopsisContainer, SynopsisText, VoteAverageContainer 
} from "./styles"



const MovieDetailCard = ({movieDetails}) => {

    return (
        <MovieDetailCardContainer>
            <CardHeaderContainer>
                <h2>{movieDetails.original_title}</h2>
                <p>{movieDetails.release_date}</p>
            </CardHeaderContainer>
            <CardBodyContainer>
                <CardInfosContainer>
                    <SynopsisContainer>
                        <strong>Synopsys</strong>
                        <StyledLine />
                        <SynopsisText>{movieDetails.overview}</SynopsisText>
                    </SynopsisContainer>
                    <InfosContainer>
                        <strong>Infos</strong>
                        <StyledLine />
                        <InfoWrapperFlex>
                            <InfoWrapper 
                                infoTitle="Status"
                                info={movieDetails.status}
                            />
                            <InfoWrapper 
                                infoTitle="Language"
                                info={movieDetails.original_language}
                            />
                            <InfoWrapper 
                                infoTitle="Duration"
                                info={`${movieDetails.runtime} min`}
                            />
                            <InfoWrapper 
                                infoTitle="Budget"
                                info={`$ ${movieDetails.budget}`}
                            />
                            <InfoWrapper 
                                infoTitle="Revenue"
                                info={`$ ${movieDetails.revenue}`}
                            />
                            <InfoWrapper 
                                infoTitle="Return"
                                info={`$ ${movieDetails.revenue - movieDetails.budget},00`}
                            />
                        </InfoWrapperFlex>
                        <MovieGenreTopics genreIds={movieDetails.genres.map(genre => {
                            return genre.id
                        })} />    
                    </InfosContainer>
                    <VoteAverageContainer><h3>{`${movieDetails.vote_average * 10}%`}</h3></VoteAverageContainer>
                </CardInfosContainer>
                <CardImageContainer src={`${BASE_IMAGE_PATH}/${movieDetails.poster_path}`} />
            </CardBodyContainer>
        </MovieDetailCardContainer>
    )
}

export default MovieDetailCard
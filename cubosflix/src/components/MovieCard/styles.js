import styled from "styled-components"

export const MovieCardContainer = styled.div`
    height: 16vh;
    margin: 10%;
    display: flex;
    justify-content: center;
`

export const ImageContainer = styled.img`
    width: 25%;
`

export const MovieInfosContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 20% 80%;
    background: #f0f0f0;
`

export const TitleContainer = styled.div`
    background: #292961;
    color: white;
    padding-left: 16%;
`

export const TitleText = styled.h4`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export const ReleaseDateContainer = styled.p`
    padding-left: 16%;
`

export const VoteAverageContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 8%;
    left: 3%;
    border-radius: 50%;
    width: 3vh;
    height: 3vh;
    background: #292961;
    color: white;
`

export const OverviewContainer = styled.p`
    margin-left: 8%;
    height: 7.2em; 
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
`
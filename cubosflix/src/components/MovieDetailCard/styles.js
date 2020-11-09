import styled from "styled-components"

export const MovieDetailCardContainer = styled.div`
    color: #292961;
    width: 96%;
    height: 30vh;
    margin-top: 24px;
    display: grid;
    grid-template-rows: 0.8fr 4.2fr;
`

export const CardHeaderContainer = styled.div`
    background: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw;
`

export const CardBodyContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr; 
`

export const CardInfosContainer  = styled.div`
    background: #fAfAfA;
    position: relative;
`

export const SynopsisContainer = styled.div`
    margin-top: 8px;
    padding: 0 5%;
`

export const StyledLine = styled.hr`
    border-color: #292961;
`

export const InfosContainer = styled.div`
    margin-top: 16px;
    padding: 0 5%;

`

export const InfoWrapperFlex = styled.div`
    display: flex;
    justify-content: space-between;
`

export const VoteAverageContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10%;
    right: 5%;
    border-radius: 50%;
    width: 5vh;
    height: 5vh;
    background: #292961;
    color: white;
`

export const CardImageContainer  = styled.img`
    width: 100%;
    height: 100%;
`
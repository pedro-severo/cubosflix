import React from "react"
import styled from "styled-components"

const InfoWrapperContainer = styled.div`
    width: 7vw;
    height: 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InfoText = styled.p `
    font-size: 0.5vh;
    position: relative;
    top: -10px;
`


const InfoWrapper = ({infoTitle, info}) => {
    return (
        <InfoWrapperContainer>
            <p>{infoTitle}</p>
            <InfoText>{info}</InfoText>
        </InfoWrapperContainer>
    )
}

export default InfoWrapper
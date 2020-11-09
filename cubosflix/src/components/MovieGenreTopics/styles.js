import styled from "styled-components"

export const GenreListContainer = styled.div`
    display: flex;
    margin-left: ${props => props.marginLeft ? (props.marginLeft) : "0"};
    margin-top: 1vh;
`

export const GenreItem = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 7px;
    margin: 0 0.5%;
    width: 10vw;
    height: 10px;
    background: #292961;
    color: white;
`
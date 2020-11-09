import React from "react" 
import { useHistory } from "react-router-dom"
import styled from "styled-components"

const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #292961;
    color: white;
`

const GoBackButton = styled.button`
    position: absolute;
    left: 5vw;
`


const Header = ({headerTitle, goBack}) => {
    const history = useHistory()

    return (
        <HeaderContainer>
            {goBack && <GoBackButton onClick={() => goBack(history)} >Voltar</GoBackButton>}
            <h1>{headerTitle}</h1>
        </HeaderContainer>
    )
}

export default Header
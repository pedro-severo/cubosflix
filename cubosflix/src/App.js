import React from "react"
import Router from "./components/Router"
import styled from "styled-components"

export const MainStyled = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
  font-size: 0.9vh;
  margin:0;
  padding:0;
`

function App() {
  return (
    <MainStyled>
      <Router />
    </MainStyled>
  );
}

export default App;

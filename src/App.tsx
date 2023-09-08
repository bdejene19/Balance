import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroLanding from './Components/HeroLanding';
import styled from 'styled-components'
function App() {
  return (
      <Main>
        <HeroLanding/>

      </Main>
  );
}
const Main = styled.main`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
export default App;

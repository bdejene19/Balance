import React from 'react';
import './App.css';
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
function App() {
  return (
    
      <Main>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      
        </Router>

      </Main>
  );
}
const Main = styled.main`
  & * {
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
`;
export default App;

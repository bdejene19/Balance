import React from 'react'
import styled from 'styled-components'
import HeroLanding from '../Components/HeroLanding';
export default function Home() {
  return (
      <Main>
          <HeroLanding/>
      </Main>
  )
}

const Main = styled.main`

    box-sizing: border-box;;
`;

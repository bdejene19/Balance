import React from 'react'
import styled from 'styled-components'
import HeroLanding from '../Components/Landing/HeroLanding';
import SubHero from '../Components/Landing/SubHero';

export default function Home() {
  return (
      <Main>
          <HeroLanding/>
          <SubHero/>
      </Main>
  )
}

const Main = styled.main`
   
`;

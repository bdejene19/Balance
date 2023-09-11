import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../Globals/Resources';
import { TextContainer } from './HeroLanding';
import SemiCircle from './SemiCircle';

export default function SubHero() {
    //
  return (
      <SubHeroSection>
          <SemiCircle color='white' halfCircle={true} rotationDeg={-45} size={30}></SemiCircle>
          <SubArticle>
            My image div
          </SubArticle>
          <SubArticle>
              <TextContainer>
                <h1 style={{fontSize: 60}}>On-demand massage made simple</h1>
                <h3>Relax, recover, and unwind with a massage in the comfort of your own home. Book in seconds on our website.</h3>
                <Button variant='outlined' style={{justifyItems: 'flex-end', marginTop: '5em', alignSelf: 'flex-start'}}>Benefits of Massage</Button>
              </TextContainer>
          </SubArticle>
      </SubHeroSection>
  )
}

const SubHeroSection = styled.section<{bgColor?: string}>`
    background-color: ${(props) => props.bgColor ? props.bgColor : Colors.PRIMARY};
    display: flex;
    flex-wrap: 'wrap';
`;

const SubArticle = styled.article`
    flex: 1 1 50%;
    height: 80vh;
    z-index: 1;
    margin-top: 10em;
`;
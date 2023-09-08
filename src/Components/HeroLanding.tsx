import styled from 'styled-components';
import React from 'react'
import { Colors, Text } from '../Globals/Resources';
import { Button } from '@mui/material';
export default function HeroLanding() {
  return (
    <HeroSection>
        <TextArticle>
            <div>
                <h1 style={{fontSize: 60}}>The Most Trust Name in Massage</h1>
                <h3>Relax, recover, and unwind with a massage in the comfort of your own home. Book in seconds on our website.</h3>
                <Button variant='contained' style={{justifyItems: 'flex-end', marginTop: '5em', alignSelf: 'flex-start'}}>{Text.BOOK}</Button>

            </div>

        </TextArticle>
        <NavArticle>
            <NavBar>
                <NavButton as={'a'} href='/'> {Text.HOME}</NavButton>
                <NavButton as={'a'} href='Services'> {Text.SERVICES}</NavButton>
                <NavButton as={'a'} href='Rates'> {Text.RATES}</NavButton>
                <NavButton as={'a'} href='Hours'> {Text.HOURS}</NavButton>
                <NavButton as={'a'} href='FAQs'> {Text.FAQs}</NavButton>
                <NavButton as={'a'} href='Book'> Book Session</NavButton>

            </NavBar>
        </NavArticle>
        <img src="https://img.freepik.com/premium-photo/beauty-spa_146667-1756.jpg?w=740" alt='therapeutic massage' style={{  boxShadow: '50px -30px 0 pink', position: 'absolute', width: '47.5vw', right: 0, top: '15%',height: '55vh'}}/>

    </HeroSection>
  )
}

const HeroSection = styled.section`
    display: flex;
    flex-wrap: wrap;
   


  

`;

const TextArticle = styled.article`
    flex: 1 1 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    background-color: ${(props) => Colors.SECONDARY}; 
    padding: 2em 5em;
    & > div {
        width: 85%;
        display: flex;
        flex-direction: column;
        row-gap: 2em;
    }

`;
const NavArticle = styled.article`
    flex: 1 1 40%;
    text-align: justify;
    background-color: ${(props) => Colors.PRIMARY};
    padding: 0.5em 2em;
`;

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center ;

    column-gap: 1em;
`;

const NavButton = styled.button<{ heavy?: boolean}>`
    font-weight: ${props => props.heavy ? 700 : 400};
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
    

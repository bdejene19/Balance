import styled from 'styled-components';
import React from 'react'
import { Colors, Text } from '../Globals/Resources';
export default function HeroLanding() {
  return (
    <HeroSection>
        <TextArticle>
            <h1 style={{fontSize: 60}}>The Most Trust Name in Massage</h1>
            <h3>hii</h3>
        </TextArticle>
        <NavArticle>
            <NavBar>
                <NavButton> {Text.HOME}</NavButton>
                <NavButton> {Text.SERVICES}</NavButton>
                <NavButton> {Text.RATES}</NavButton>
                <NavButton> {Text.HOURS}</NavButton>
                <NavButton> {Text.FAQs}</NavButton>
                <NavButton> Book Session</NavButton>



            </NavBar>
        </NavArticle>
    </HeroSection>
  )
}

const HeroSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    min-height: 45vh ;

`;

const TextArticle = styled.article`
    flex: 1 1 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    background-color: ${(props) => Colors.SECONDARY};
`;
const NavArticle = styled.article`
    flex: 1 1 45%;
    text-align: justify ;
    background-color: ${(props) => Colors.PRIMARY};
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
    border: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
    

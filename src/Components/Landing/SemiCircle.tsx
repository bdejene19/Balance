import React from 'react'
import styled from 'styled-components';

type CircleDesign = {
    halfCircle: boolean;
    rotationDeg: number;
    color: string;
    size: number;
}
export default function SemiCircle(props: CircleDesign) {
  return (
    <CircleContainer 
        color={props.color} 
        size={props.size} 
        halfCircle={props.halfCircle} 
        rotationDeg={props.rotationDeg}
    >
        <div></div>
        <div></div>
    </CircleContainer>
  )
}

const CircleContainer = styled.div<CircleDesign>`
    height: ${props => `${props.size * 2}vh`};
    width: ${props => `${props.size}vw`};
    border-radius: ${props => props.halfCircle ? `50%` : 0};
    transform: ${props => `rotate(${props.rotationDeg}deg)`};
    display: flex;
    overflow: hidden;
    position: absolute;
    left: 40%;
    bottom: -20%;
    z-index: 0;
    div {
        flex: 1 1 50%;
    }
    div:first-of-type {
        background-color: ${props => props.color};
        
    }

    div:last-of-type {
        background-color: transparent;
        height: 30vh;
        width: 30vw;
        font-size: 300;
    }

`;

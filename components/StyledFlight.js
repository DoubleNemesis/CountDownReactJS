import React from 'react'
import styled, {keyframes} from 'styled-components'


const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
  transform: rotate(90deg);  
}
`

const fly = keyframes`
 0% { left: 0px }
 50% { left: 450px }
 75% {transform: rotate(270deg)}
 100% {left: 0px}
`

const Flight = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
background-color: transparent;
    margin: 0;
    padding: 0;
    border-bottom: 6px solid #0b3d91;
    ffont-family: 'Orbitron', sans-serif;
    font-size: 40px;
    color: #0b3d91;
img{
    position: relative;
    width: 120px;
    margin: .5em;
    padding: 0;
    animation: ${rotate} 1s, ${fly} 4s;
     animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
animation-fill-mode: forwards;
    
}

@media(max-width:400px){

}
`


const StyledFlight = ({ children, ...restProps }) => {
    return (
        <Flight {...restProps}><img src={restProps.image}/></Flight>
    )
}

export default StyledFlight
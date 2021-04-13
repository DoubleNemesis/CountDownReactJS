import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components'

const launch = keyframes`
 0% { bottom: 0px }
 100% { bottom: 1000px }
`
const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
  transform: rotate(270deg);  
}
`

const Rocket = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
background-color: transparent;
    margin-bottom: 100px;
    padding: 0;
    border-bottom: 6px solid #0b3d91;
    font-family: 'Orbitron', sans-serif;
    font-size: 40px;
    color: #0b3d91;

img{
    position: relative;
    width: 150px;
    margin: 0;
    padding: 0;
    animation:
    ${({finished})=>{
        if (finished){
            return launch 
        }
         else {
             return null
         }
    }} 2s;
    -webkit-animation-fill-mode: forwards;
animation-fill-mode: forwards;
    
}



@media(max-width:400px){

}
`

const FuelTank = styled.div`
background-color: #fc3d21;
height: 200px;
width: 100px;
border: 6px solid #fc3d21;
border-top-right-radius: 15px;
border-top-left-radius: 15px;
box-sizing: border-box;
`
const Fuel = styled.div`
    background-color: white;
    height: ${({ countdown, total }) => {
        console.log('cd', countdown, 't', total)
        console.log((100 - Math.abs(Math.floor(countdown / total * 100))) * 1.8)
        let pixelCount = (100 - Math.abs(Math.floor(countdown / total * 100))) * 1.8
        return pixelCount || 0
    }}px;
    width: 90px;
    position: relative;
    top: 2px;
    left: -2px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border: 2px solid red;

`

const LaunchPad = styled.div`
background-color: #333;
height: 200px;
width: 30px;
margin-right: 5px;

p{
    margin-left: 0px;
    margin-top: 30px;
    writing-mode: vertical-rl;
text-orientation: mixed;
font-size: 25px;
color: white;
}


`
const Base = styled.div`
display: block;
background-color: #333;
height: 10px;
width: 300px;
margin-left: -300px;
    margin-top: 200px;
`
const FuelArm = styled.div`
display: block;
    background-color: #333;
    z-index: -1;
    height: 5px;
    width: 100px;
    margin-left: -200px;
    margin-top: -90px;
        animation:
    ${({finished})=>{
        if (finished){
            return rotate 
        }
         else {
             return null
         }
    }} 1s;
    -webkit-animation-fill-mode: forwards;
animation-fill-mode: forwards;
`

const StyledRocket = ({ children, ...restProps }) => {
    const [refill, setRefill] = useState(10)

    //180 empty //0 full 1.8 is 1%
    //take coutndown and calc 1% by dividing by 100

    return (
        <Rocket {...restProps}>{children}<img src="./images/shuttle.png" /><LaunchPad {...restProps} ><p>NASA</p></LaunchPad><FuelTank {...restProps}><Fuel {...restProps} /></FuelTank><Base /><FuelArm {...restProps}></FuelArm></Rocket>
    )
}

export default StyledRocket
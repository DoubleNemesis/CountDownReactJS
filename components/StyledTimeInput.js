import React from 'react'
import styled from 'styled-components'

const TimerInput = styled.input`
background-color: white;
color: #333;
display: flex;
flex-direction: row;
border: none;
max-width: 50px;
height: 40px;
font-size: 30px;
padding-left: .5em;

:first-child{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
`

const StyledTimeInput = ({children, ...restProps}) =>{
    return (
        <>
       <label> {restProps.label}<TimerInput {...restProps}>{children}</TimerInput></label>
    </>
    )
}

export default StyledTimeInput
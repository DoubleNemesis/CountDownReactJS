import React from 'react'
import styled from 'styled-components'

const TimeDisplay = styled.div`
display: flex;
flex-direction: row;
padding: 1em;
background-color: whitesmoke;
width: auto;
font-size: 30px;

:first-child{
    border: 2px solid #666;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
:nth-child(2), :nth-child(3){
    border-right: 2px solid #666;
    border-top: 2px solid #666;
    border-bottom: 2px solid #666;
}

@media(max-width:500px){
    
    
    :first-child{
        border: 2px solid #666;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: unset;
}
    :nth-child(2), :nth-child(3){
        border-right: 2px solid #666;
        border-left: 2px solid #666;
        border-top:none;
    }
}
}



`

const StyledTimeDisplay = ({children, ...restProps}) =>{
    return (
       <TimeDisplay {...restProps}>{children}</TimeDisplay> 
    )
}

export default StyledTimeDisplay
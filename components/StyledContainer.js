import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
background-color: whitesmoke;
padding: 2.5em;
border-radius: 5px;
opacity: 1;
border: 6px solid #0b3d91;
width: 50%;
margin: 5em auto 0 auto;

label{
    display: flex;
    flex-direction: column;
    align-items: center;
font-size: 20px;
color: #0b3d91;
background-color: white;
border-top: 2px solid #666;
border-bottom: 2px solid #666;
:first-child{
    border: 2px solid #666;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
:nth-child(2), :nth-child(3){
    border-right: 2px solid #666;
}
}

@media(max-width:500px){
    flex-direction: column;
    
    label{
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
const StyledContainer = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

export default StyledContainer
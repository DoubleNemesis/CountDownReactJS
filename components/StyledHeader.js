import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
background-color: transparent;
    margin: 0;
    padding: 0;
    border-bottom: 6px solid #0b3d91;
    font-family: 'Orbitron', sans-serif;
    font-size: 40px;
    color: #0b3d91;

img{
    width: 200px;
    margin: 0;
    padding: 0;
}

@media(max-width:400px){

}
`

const Title= styled.h1`
background-color: white;
font-size: 40px;
`

const StyledHeader = ({ children, ...restProps }) => {
    return (
        <Header {...restProps}><img src={restProps.image}/><Title>{children}</Title></Header>
    )
}

export default StyledHeader
import React from 'react'
import styled from 'styled-components'

const Message = styled.h2`
    position: relative;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Orbitron', sans-serif;
    font-size: 40px;
    color: #0b3d91;
    border: unset;
    text-align:center;
    top: 180px;
`



const StyledMessage = ({ children, ...restProps }) => {
    return (
        <Message {...restProps}>{children}</Message>
    )
}

export default StyledMessage
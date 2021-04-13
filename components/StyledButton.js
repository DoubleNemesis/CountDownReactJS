import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background-color: #0b3d91;
padding: 10px;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
border: 2px solid #666;
border-left: none;
width: 80px;
color: white;
font-size: 20px;

@media(max-width:500px){
border-top-right-radius: unset;
border-top: unset;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
width: autoconst ;
}


`
const StyledButton = ({children, ...restProps})=>{
    return(
        <Button {...restProps}>{children}</Button>
    )
}

export default StyledButton
import React, { useState } from 'react';
import styled from 'styled-components';
import { InputField } from './InputField';

function Searchbar(props) {

    const StyledDiv = styled.div`
        width: auto; 
        height: 200px; 
        display : flex;
        flex-direction : row;
        align-items : start;
        background: #f7f7f7;
    `

    return (
        <StyledDiv>
            <InputField />
        </StyledDiv>
    )
}


export { Searchbar }; 
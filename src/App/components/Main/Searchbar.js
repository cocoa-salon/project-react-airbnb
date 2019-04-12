import React from 'react';
import styled from 'styled-components';
import { InputField } from './InputField';

function Searchbar(props) {

    const Flex = styled.div`
        width: auto; 
        height: 100px;
        display : flex;
        flex-direction : row;
        align-items : center;
        background: #f7f7f7;
    `


    return (
        <Flex>
            <InputField />
        </Flex>
    )
}


export { Searchbar }; 
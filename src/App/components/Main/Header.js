import React from 'react';
import styled from 'styled-components';
import { Searchbar } from './Searchbar';

function Header(props) {

    return (
        <StyeldHeader>
            <Searchbar />
        </StyeldHeader>
    )
}


const StyeldHeader = styled.header`
    width: auto; 
    height: 150px; 
    background: #f7f7f7; 
`

export { Header };
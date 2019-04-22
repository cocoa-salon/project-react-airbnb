import React from 'react';
import styled from 'styled-components';
import { Searchbar } from './Searchbar';

function Header(props) {

    return (
        <StyeldHeader>
            <h3>this is Header area.</h3>
            <Searchbar />
        </StyeldHeader>
    )
}

const StyeldHeader = styled.header`
    position: relative; 
    width: 100%;
    height: 150px; 
    background: #f7f7f7; 
    border: solid 2px grey; 
`

export { Header };
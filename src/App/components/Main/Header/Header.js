import React from 'react';
import styled from 'styled-components';
import Searchbar from './Searchbar';

function Header(props) {

    return (
        <StyeldHeader>
            <Searchbar />
        </StyeldHeader>
    )
}

const StyeldHeader = styled.header`
    padding: 10px; 
    position: relative; 
    width: auto;
    height: 50px; 
    background: white; 
    border: solid 1px rgb(230,230,230);
`

export default Header; 
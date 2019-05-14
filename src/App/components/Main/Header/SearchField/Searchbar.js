import React from 'react';
import styled from 'styled-components';
import { InputField } from './InputField';
import airbnb_logo from '../../../../../img/airbnb_logo.png';

function Searchbar(props) {

    return (
        <StyledDiv>
            <LogoArea />
            <InputField />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
        width: auto; 
        height: 50px; 
        display : flex;
        flex-direction : row;
        justify-content: flex-start;
        align-items : center;
        background: white;
`


const LogoArea = (props) =>
    <StyledLogoAreaDiv>
        <a href="/">
            <LogoStyle src={airbnb_logo} />
        </a>
    </StyledLogoAreaDiv>


const StyledLogoAreaDiv = styled.div`
    position: relative;
    width: auto;
    height: 50px;
    background: grey;
`

const LogoStyle = styled.img`
    width: 25px;
    display: block;
    position: absolute; 
    top: 10px; 
`

export default Searchbar; 
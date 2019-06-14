import React from 'react';
import airbnb_logo from '../../../../img/airbnb_logo.png'
import styled, { css, keyframes } from 'styled-components';

const blankItemsNum = 12;
const blankItemsArray = [];

const StyledItemsList = styled.li`
    display: inline-block;
`;

const containerFade = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }
`;

const StyledItemImageContainer = styled.div`
    position: relative;
    width: 354px;
    height: 230px;
    margin: 0 10px 20px 0;
    background: rgb(224,224,224);
    border-radius: 5px; 

    animation: ${containerFade} 2s infinite linear alternate;

    /* ${(props) => {
        if(props.active) { 
            return css `animation: ${containerFade} 2s infinite linear alternate`;
        }
    }};  */
    
    /* animation-name: ${containerFade};
    animation-duration: 1.5s;
    animation-delay: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;  */
`;

const StyledItemsInfoContainer = styled(StyledItemImageContainer)`
    height: 100px;
`;

const StyledContainerLogo = styled.img`
    width: 50px;
    display: block;
    position: absolute; 
    top: 20px; 
    left: 20px; 
`;

const SectionsPlaceholder = () => 
        <ul>{blankItemsArray}</ul>

const BlankItemsList = () => 
    <StyledItemsList>
        <StyledItemImageContainer active={true}>
            <StyledContainerLogo src={airbnb_logo} alt="" />
        </StyledItemImageContainer>
        <StyledItemsInfoContainer active={true} />
    </StyledItemsList>


for (let i = 0; i < blankItemsNum; i++) {
    blankItemsArray.push(<BlankItemsList key={i} />);
};

export default SectionsPlaceholder;
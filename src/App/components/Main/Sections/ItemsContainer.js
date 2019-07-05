import React from 'react';
import styled from 'styled-components';
import airbnb_logo from '../../../../img/airbnb_logo_small_white.png'

const ItemsContainer  = (props) => {
    return (
        <div className={props.className}>
            <StyledItemImageContainer>
                <StyledItemImage src={props.image.pictureUrl} alt="" />
                <StyledContainerLogo src={airbnb_logo} alt="" />
            </StyledItemImageContainer>
            <StyledProperyType>{props.propertyType.toUpperCase()}</StyledProperyType>
            <StyledStaysName>{props.name}</StyledStaysName>
            <StyledPrice>&#8361;{attachComma(props.price)} /박</StyledPrice>
            <StyledRating>폄점: {props.review_scores.rating} 리뷰수: {props.numberOfReviews}</StyledRating>
        </div>
    );
};

const StyledItemsContainer = styled(ItemsContainer)`
    width: 354px;
    height: 330px;
    background: white;
    margin: 0 10px 20px 0;
`;

const StyledItemImageContainer = styled.div`
    position: relative;
    width: 343px; 
    height: 230px; 
    background: rgb(235,235,235);
`;

const StyledItemImage = styled.img`
    position: relative;
    z-index: 30;
    width: 343px;
    height: 230px; 
    border-radius: 5px;
`;

const StyledContainerLogo = styled.img`
    width: 50px;
    display: block;
    position: absolute; 
    top: 20px; 
    left: 20px; 
    z-index: 20
`;

const StyledProperyType = styled.p`
    font-size: 13px; 
    color: rgb(99,99,99);
    font-weight: bold;
    margin: 5px 0 4px 0;  
`;

const StyledStaysName = styled.p`
    font-size: 15px; 
    color: rgb(57,57,57);
    font-weight: bold; 
    margin: 0px 0 4px 0;  
`;

const StyledPrice = styled.p`
    font-size: 13px; 
    color: rgb(64,64,64); 
    margin: 0px 0 2px 0;  
`;

const StyledRating = styled.p`
    font-size: 11px; 
    color: rgb(64,64,64); 
    margin: 0px 0 2px 0;  
`;

const attachComma = (number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


export { StyledItemsContainer };
/* export { StyledItemsList } */
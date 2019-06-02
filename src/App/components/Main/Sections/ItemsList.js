import React from 'react';
import styled from 'styled-components';

const Items = (props) => {
    return (
        <div className={props.className}>
            <div style={{width: "343px", height: "230px", background: "slightGrey" }}>
                <img src={props.image.pictureUrl} alt="" style={{width: "343px", height: "230px", borderRadius: "5px"}} />
            </div>
            <StyledProperyType>{props.propertyType.toUpperCase()}</StyledProperyType>
            <StyledStaysName>{props.name}</StyledStaysName>
            <StyledPrice>&#8361;{attachComma(props.price)} /박</StyledPrice>
            <StyledRating>폄점: {props.review_scores.rating} 리뷰수: {props.numberOfReviews}</StyledRating>
        </div>
    );
};

const StyledItemsList = styled.li`
    display: inline-block;
`

const StyledItemsContainer = styled(Items)`
    width: 354px;
    height: 330px;
    background: white;
    margin: 0 10px 20px 0;
`

const StyledProperyType = styled.p`
    font-size: 13px; 
    color: rgb(99,99,99);
    font-weight: bold;
    margin: 5px 0 4px 0;  
`

const StyledStaysName = styled.p`
    font-size: 15px; 
    color: rgb(57,57,57);
    font-weight: bold; 
    margin: 0px 0 4px 0;  
`

const StyledPrice = styled.p`
    font-size: 13px; 
    color: rgb(64,64,64); 
    margin: 0px 0 2px 0;  
`

const StyledRating = styled.p`
    font-size: 11px; 
    color: rgb(64,64,64); 
    margin: 0px 0 2px 0;  
`

const attachComma = (number) => 
        number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


export { StyledItemsContainer }; 
export { StyledItemsList }
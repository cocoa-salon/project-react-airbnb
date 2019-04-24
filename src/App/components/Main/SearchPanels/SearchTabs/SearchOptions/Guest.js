import React from 'react';
import styled from 'styled-components';

import { SearchOptionStyle } from './SearchOptionStyle';

function Guest(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    const calculateGuestNum = (event) => {
        const name = event.target.name;
        props.calculateGuestNum(name);
    }

    return (
        <SearchOptionStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter} onClick={calculateGuestNum} >
            <StyledDiv>
                <StyledP>성인</StyledP> 
                <StyledButtonDiv>
                    <RemoveAdultButton isButtonDisabled={props.isButtonDisabled} name="removeAdult">-</RemoveAdultButton>
                    <StyledNumDiv>{props.adultNum} +</StyledNumDiv>
                    <AddAdultButton isButtonDisabled={props.isButtonDisabled} name="addAdult">+</AddAdultButton>
                </StyledButtonDiv>
            </StyledDiv>
            <StyledDiv>
                <StyledP>어린이</StyledP>
                <StyledButtonDiv>
                    <RemoveChildButton isButtonDisabled={props.isButtonDisabled} name="removeChildren">-</RemoveChildButton>
                    <StyledNumDiv>{props.childNum} +</StyledNumDiv>
                    <AddChildButton isButtonDisabled={props.isButtonDisabled} name="addChildren">+</AddChildButton>
                </StyledButtonDiv>
            </StyledDiv>
            <StyledDiv>
                <StyledP>유아</StyledP> 
                <StyledButtonDiv>
                    <RemoveToddlerButton isButtonDisabled={props.isButtonDisabled} name="removeToddler">-</RemoveToddlerButton>
                    <StyledNumDiv>{props.toddlerNum} +</StyledNumDiv>
                    <AddToddlerButton isButtonDisabled={props.isButtonDisabled} name="addToddler">+</AddToddlerButton>
                </StyledButtonDiv>
            </StyledDiv>
        </SearchOptionStyle>
    )
}


const StyledButton = styled.button`
    display: inline-block;
    border-radius: 50%; 
    width:40px;
    height:40px;
    margin-left: 30px;
    outline: none;
    font-size: 20px; 
`

const AddAdultButton = styled(StyledButton)`
    border-color: ${ props => props.isButtonDisabled.maxAdult ? "#008c9e" : "#c6e5d9" };
    color : ${ props => props.isButtonDisabled.maxAdult ? "#008c9e" : "#c6e5d9" };
`
const RemoveAdultButton = styled(StyledButton)`
    border-color: ${ props => props.isButtonDisabled.minAdult ? "#008c9e" : "#c6e5d9" };
    color : ${ props => props.isButtonDisabled.minAdult ? "#008c9e" : "#c6e5d9" };
`
const AddChildButton = styled(StyledButton)`
    border-color: ${ props => props.isButtonDisabled.maxChild ? "#008c9e" : "#c6e5d9" };
    color : ${ props => props.isButtonDisabled.maxChild ? "#008c9e" : "#c6e5d9" };
`
const RemoveChildButton = styled(StyledButton)`
    border-color: ${ props => props.isButtonDisabled.minChild ? "#008c9e" : "#c6e5d9" };
    color : ${ props => props.isButtonDisabled.minChild ? "#008c9e" : "#c6e5d9" };
`
const AddToddlerButton = styled(StyledButton)`
    border-color: ${ props => props.isButtonDisabled.maxToddler ? "#008c9e" : "#c6e5d9" };
    color : ${ props => props.isButtonDisabled.maxToddler ? "#008c9e" : "#c6e5d9" };
`
const RemoveToddlerButton = styled(StyledButton)`
    border-color: ${ props => props.isButtonDisabled.minToddler ? "#008c9e" : "#c6e5d9" };
    color : ${ props => props.isButtonDisabled.minToddler ? "#008c9e" : "#c6e5d9" };
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row; 
    padding: 10px; 
`

const StyledP = styled.p`
    flex: 100px;
`

const StyledButtonDiv = styled.div`
    flex: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const StyledNumDiv = styled.div`
    margin-left: 10px; 
`

export { Guest };
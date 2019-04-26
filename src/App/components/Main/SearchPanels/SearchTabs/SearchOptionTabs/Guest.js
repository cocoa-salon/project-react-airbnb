import React from 'react';
import styled from 'styled-components';

import { SearchOptionStyle } from './SearchOptionStyle';

function Guest(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();
    const resetGuestNum = (event) => {
        const buttonName = event.target.name;
        props.resetGuestNum(buttonName);
    }

    const calculateGuestNum = (event) => {
        const buttonName = event.target.name;
        props.calculateGuestNum(buttonName);
    }

    return (
        <SearchOptionStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter} onClick={calculateGuestNum} >
            <StyledDiv>
                <StyledP>성인</StyledP>
                <StyledButtonDiv>
                    <RemoveAdultButton isButtonActivated={props.isButtonActivated} name="removeAdult">-</RemoveAdultButton>
                    <StyledNumDiv>{props.adultNum} +</StyledNumDiv>
                    <AddAdultButton isButtonActivated={props.isButtonActivated} name="addAdult">+</AddAdultButton>
                </StyledButtonDiv>
            </StyledDiv>
            <StyledDiv>
                <StyledP>어린이</StyledP>
                <StyledButtonDiv>
                    <RemoveChildButton isButtonActivated={props.isButtonActivated} name="removeChildren">-</RemoveChildButton>
                    <StyledNumDiv>{props.childNum} +</StyledNumDiv>
                    <AddChildButton isButtonActivated={props.isButtonActivated} name="addChildren">+</AddChildButton>
                </StyledButtonDiv>
            </StyledDiv>
            <StyledDiv>
                <StyledP>유아</StyledP>
                <StyledButtonDiv>
                    <RemoveToddlerButton isButtonActivated={props.isButtonActivated} name="removeToddler">-</RemoveToddlerButton>
                    <StyledNumDiv>{props.toddlerNum} +</StyledNumDiv>
                    <AddToddlerButton isButtonActivated={props.isButtonActivated} name="addToddler">+</AddToddlerButton>
                </StyledButtonDiv>
            </StyledDiv>
            <StyledDiv>
                <StyleResetButton name="reset" style={{cursor: 'pointer'}} onClick={resetGuestNum}>삭제</StyleResetButton>
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
    font-size: 16px; 
`

const StyleResetButton = styled(StyledButton)`
    border-radius: 0%; 
    border: none;
    width: 60px; 
`

const StyledButtonDiv = styled.div`
    flex: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const AddAdultButton = styled(StyledButton)`
    border-color: ${ props => props.isButtonActivated.maxAdult ? "#008c9e" : "#c6e5d9"};
    color : ${ props => props.isButtonActivated.maxAdult ? "#008c9e" : "#c6e5d9"};
`
const RemoveAdultButton = styled(StyledButton)`
    border-color: ${ props => props.isButtonActivated.minAdult ? "#008c9e" : "#c6e5d9"};
    color : ${ props => props.isButtonActivated.minAdult ? "#008c9e" : "#c6e5d9"};
`
const AddChildButton = styled(StyledButton)`
    border-color: ${ props => props.isButtonActivated.maxChild ? "#008c9e" : "#c6e5d9"};
    color : ${ props => props.isButtonActivated.maxChild ? "#008c9e" : "#c6e5d9"};
`
const RemoveChildButton = styled(StyledButton)`
    border-color: ${ props => props.isButtonActivated.minChild ? "#008c9e" : "#c6e5d9"};
    color : ${ props => props.isButtonActivated.minChild ? "#008c9e" : "#c6e5d9"};
`
const AddToddlerButton = styled(StyledButton)`
    border-color: ${ props => props.isButtonActivated.maxToddler ? "#008c9e" : "#c6e5d9"};
    color : ${ props => props.isButtonActivated.maxToddler ? "#008c9e" : "#c6e5d9"};
`
const RemoveToddlerButton = styled(StyledButton)`
    border-color: ${ props => props.isButtonActivated.minToddler ? "#008c9e" : "#c6e5d9"};
    color : ${ props => props.isButtonActivated.minToddler ? "#008c9e" : "#c6e5d9"};
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row; 
    padding: 10px; 
`

const StyledP = styled.p`
    flex: 100px;
`

const StyledNumDiv = styled.div`
    margin-left: 10px; 
`

export { Guest };
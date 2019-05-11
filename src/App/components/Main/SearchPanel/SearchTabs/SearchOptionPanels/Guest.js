import React, { useContext } from 'react';
import styled from 'styled-components';
import { OptionTabStyle } from './OptionTabStyle';
import { SearchOptionPanelContext } from '../SearchTabs';


const StyledButton = styled.button`
    display: inline-block;
    border-radius: 50%; 
    width:40px;
    height:40px;
    margin-left: 30px;
    outline: none;
    font-size: 16px; 
`

const MinusPlusButton = (props) => {

    const value = useContext(SearchOptionPanelContext);

    const buttonActivatedStyle = {
        borderColor: "#008c9e",
        color: "#008c9e"
    }

    const buttonInactivatedStyle = {
        borderColor: "#c6e5d9",
        color: "#c6e5d9"
    }

    const checkButtonIsActivated = () => {
        if (
            (props.name === "removeAdult" && value.guestNum.removeAdult === false) ||
            (props.name === "removeChildren" && value.guestNum.removeChildren === false) ||
            (props.name === "removeToddler" && value.guestNum.removeToddler === false) ||
            (props.name === "addAdult" && value.guestNum.addAdult === false) ||
            (props.name === "addChildren" && value.guestNum.addChildren === false) ||
            (props.name === "addToddler" && value.guestNum.addToddler === false)
        ) {
            return buttonInactivatedStyle;
        } else {
            return buttonActivatedStyle;
        }
    }

    return (
        <StyledButton
            style={checkButtonIsActivated()} name={props.name} >
            {props.children}
        </StyledButton>
    )
};

const GuestNumSetButton = (props) => {

    return (
        <StyledDiv>
            <StyledP>{props.guestType}</StyledP>
            <StyledButtonDiv>
                <MinusPlusButton name={props.rightButton}>-</MinusPlusButton>
                <StyledNumDiv>{props.numbers} +</StyledNumDiv>
                <MinusPlusButton name={props.leftButton}>+</MinusPlusButton>
            </StyledButtonDiv>
        </StyledDiv>
    )
};

function Guest(props) {
    const value = useContext(SearchOptionPanelContext);

    const isCheckOne = (event) => {
        const name = event.target.name;
        if(name === "addAdult" || name === "addChildren" || name === "addToddler") {
            value.toggleTabOnOff('guest', true); 
        }
        value.calculateGuestNum(name);
    }

    return (
        <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter} onClick={isCheckOne} >
            <GuestNumSetButton guestType="성인" rightButton="removeAdult" leftButton="addAdult" numbers={value.guestNum.adultNum} />
            <GuestNumSetButton guestType="어린이" rightButton="removeChildren" leftButton="addChildren" numbers={value.guestNum.childNum} />
            <GuestNumSetButton guestType="유아" rightButton="removeToddler" leftButton="addToddler" numbers={value.guestNum.toddlerNum} />
            <StyledDiv>
                <StyleResetButton name="reset" style={{ cursor: 'pointer' }} onClick={value.resetGuestNum}>삭제</StyleResetButton>
            </StyledDiv>
        </OptionTabStyle>
    )
}

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
import React, { forwardRef, createRef } from 'react';
import styled from 'styled-components';

import { OptionTabStyle } from './OptionTabStyle';
import { SearchOptionPanelConsumer } from '../SearchTabs';

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
            (props.name === "removeAdult" && props.isButtonActivated.minAdult === false) ||
            (props.name === "removeChildren" && props.isButtonActivated.minChild === false ) ||
            (props.name === "removeToddler" && props.isButtonActivated.minToddler === false) ||
            (props.name === "addAdult" && props.isButtonActivated.maxAdult === false) ||
            (props.name === "addChildren" && props.isButtonActivated.maxChild === false)||
            (props.name === "addToddler" && props.isButtonActivated.maxToddler === false)
            ) { 
                return buttonInactivatedStyle;
            } else {
                return buttonActivatedStyle;
            }
    }

    return (
        <StyledButton
            style={checkButtonIsActivated()} name={props.name} isButtonActivated={props.isButtonActivated} >
            {props.children}
        </StyledButton>
    )
};

const GuestNumSetButton = (props) => {
    
    return (
        <StyledDiv>
            <StyledP>{props.guestType}</StyledP>
            <StyledButtonDiv>
                <MinusPlusButton isButtonActivated={props.isButtonActivated} name={props.rightButton}>-</MinusPlusButton>
                <StyledNumDiv>{props.numbers} +</StyledNumDiv>
                <MinusPlusButton isButtonActivated={props.isButtonActivated} name={props.leftButton}>+</MinusPlusButton>
            </StyledButtonDiv>
        </StyledDiv>
    )
};

function Guest(props) {

    return (
        <SearchOptionPanelConsumer>
            {
                (value) => (
                    <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter} onClick={value.calculateGuestNum} >
                        <GuestNumSetButton guestType="성인" rightButton="removeAdult" leftButton="addAdult" numbers={value.adultNum} isButtonActivated={value.isButtonActivated} />
                        <GuestNumSetButton guestType="어린이" rightButton="removeChildren" leftButton="addChildren" numbers={value.childNum} isButtonActivated={value.isButtonActivated} />
                        <GuestNumSetButton guestType="유아" rightButton="removeToddler" leftButton="addToddler" numbers={value.toddlerNum} isButtonActivated={value.isButtonActivated} />
                        <StyledDiv>
                            <StyleResetButton name="reset" style={{ cursor: 'pointer' }} onClick={value.resetGuestNum}>삭제</StyleResetButton>
                        </StyledDiv>
                    </OptionTabStyle>
                )
            }
        </SearchOptionPanelConsumer>
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
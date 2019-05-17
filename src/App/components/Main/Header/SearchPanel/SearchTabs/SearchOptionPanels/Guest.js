import React, { useContext } from 'react';
import styled from 'styled-components';
import OptionTabStyle from './OptionTabStyle';
import { OptionPanelSetContext } from '../../../Header';
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { DeleteApplyButtonStyle } from './DeleteApplyStyle';

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

    const contextValue = useContext(OptionPanelSetContext);

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
            (props.name === "removeAdult" && contextValue.guestNum.removeAdult === false) ||
            (props.name === "removeChildren" && contextValue.guestNum.removeChildren === false) ||
            (props.name === "removeToddler" && contextValue.guestNum.removeToddler === false) ||
            (props.name === "addAdult" && contextValue.guestNum.addAdult === false) ||
            (props.name === "addChildren" && contextValue.guestNum.addChildren === false) ||
            (props.name === "addToddler" && contextValue.guestNum.addToddler === false)
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
    const contextValue = useContext(OptionPanelSetContext);

    const setGuestNum = (event) => {
        const name = event.target.name;
        if(event.target.tagName !== 'BUTTON') return;
        if(name === "addAdult" || name === "addChildren" || name === "addToddler") {
         contextValue.toggleTabOnOff('guest', true); 
        }
     contextValue.dispatchGuestNum({type: name });
    }

    const resetGuestNum = (event) => {
     contextValue.dispatchGuestNum({type: 'reset'});
    }

    return (
        <OptionTabStyle onClick={setGuestNum} >
            <GuestNumSetButton guestType="성인" rightButton="removeAdult" leftButton="addAdult" numbers= {contextValue.guestNum.adultNum} />
            <GuestNumSetButton guestType="어린이" rightButton="removeChildren" leftButton="addChildren" numbers= {contextValue.guestNum.childNum} />
            <GuestNumSetButton guestType="유아" rightButton="removeToddler" leftButton="addToddler" numbers= {contextValue.guestNum.toddlerNum} />
            <DeleteApplyStyle>
                <DeleteApplyButtonStyle name="reset" onClick={resetGuestNum}>삭제</DeleteApplyButtonStyle>
                <DeleteApplyButtonStyle>
                    적용
                </DeleteApplyButtonStyle>
            </DeleteApplyStyle> 
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

export default Guest;
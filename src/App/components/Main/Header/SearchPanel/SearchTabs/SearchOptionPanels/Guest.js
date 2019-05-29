import React, { useContext } from 'react';
import styled from 'styled-components';
import OptionTabStyle from './OptionTabStyle';
import { OptionPanelSetContext } from '../../../Header';
import { ClosePanelContext } from '../../../../Main'
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { ApplyButtonStyle } from './DeleteApplyStyle';
import { DeleteButtonStyle } from './DeleteApplyStyle';

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
    };

    const buttonInactivatedStyle = {
        borderColor: "#c6e5d9",
        color: "#c6e5d9"
    };

    const checkButtonIsActivated = () => {
        if (
            (props.name === "removeAdult" && contextValue.removeAdult === false) ||
            (props.name === "removeChildren" && contextValue.removeChildren === false) ||
            (props.name === "removeToddler" && contextValue.removeToddler === false) ||
            (props.name === "addAdult" && contextValue.addAdult === false) ||
            (props.name === "addChildren" && contextValue.addChildren === false) ||
            (props.name === "addToddler" && contextValue.addToddler === false)
        ) {
            return buttonInactivatedStyle;
        } else {
            return buttonActivatedStyle;
        };
    };

    return (
        <StyledButton
            style={checkButtonIsActivated()} name={props.name} >
            {props.children}
        </StyledButton>
    );
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
    );
};

let queryToClear = "";

function Guest(props) {
    const contextValue = useContext(OptionPanelSetContext);
    const closePanelContextValue = useContext(ClosePanelContext);

    const setGuestNum = (event) => {
        const name = event.target.name;
        if (event.target.tagName !== 'BUTTON') return;
        if (name === "addAdult" || name === "addChildren" || name === "addToddler" ) {
            contextValue.toggleTabOnOff('guest', true);
            contextValue.setIsPanelDeleteButtonActivated({...contextValue.isPanelDeleteButtonActivated, guest : true});
        } 
        checkIsRemoveAdultActivated(name); 
        contextValue.dispatchGuestNum({ type: name });
    };

    const checkIsRemoveAdultActivated = (name) => {
        if (( name === "removeAdult" && contextValue.totalNum === 2 && contextValue.adultNum === 2) ||
        ( name === "removeChildren" && contextValue.totalNum === 2 && contextValue.childNum === 1) ||
        ( name === "removeToddler" && contextValue.totalNum === 1 && contextValue.toddlerNum === 1)) {
         contextValue.setIsPanelDeleteButtonActivated({...contextValue.isPanelDeleteButtonActivated, guest : false});
        } 
    };

    const resetGuestNum = (event) => {
        event.stopPropagation();
        contextValue.dispatchGuestNum({ type: 'reset' });
        contextValue.setIsPanelDeleteButtonActivated({...contextValue.isPanelDeleteButtonActivated, guest : false});
    };


    const templateGuest = {
        adults: `&adults={{adults}}`,
        children: `&children={{children}}`,
        infants: `&infants={{infants}}`
    }

    const regExpGuest = {
        adults: new RegExp('\{\{adults\}\}'),
        children: new RegExp('\{\{children\}\}'),
        infants: new RegExp('\{\{infants\}\}')
    }

    // 쿼리 생성(각 검색 옵션 패널마다 상이)
    const generateQueryString = () => {
        let queryString = "";
        if(contextValue.adultNum === 0) {
            queryString += templateGuest.adults.replace(regExpGuest.adults, 1);
        } else if(contextValue.adultNum > 0) {
            queryString += templateGuest.adults.replace(regExpGuest.adults, contextValue.adultNum);
        }
        if(contextValue.childNum > 0) {
            queryString += templateGuest.children.replace(regExpGuest.children, contextValue.childNum);
        } 
        if(contextValue.toddlerNum > 0) {
            queryString += templateGuest.infants.replace(regExpGuest.infants, contextValue.toddlerNum);
        } 
        return queryString;
    }

    const applyGuestNum = (event) => {
        event.stopPropagation();
        if(contextValue.adultNum === 0) {
            contextValue.dispatchGuestNum({ type: 'addAdult' });
            contextValue.toggleTabOnOff('guest', true);
        }

        closePanelContextValue.queryString.str = closePanelContextValue.queryString.str.replace(queryToClear, "");
        let generatedQuery = generateQueryString();
        queryToClear = generatedQuery;
        closePanelContextValue.queryString.str  += generatedQuery;
        closePanelContextValue.operateFetch(closePanelContextValue.queryString.str);
        closePanelContextValue.setSelectedTab('none');
    };
    
    return (
        <OptionTabStyle onClick={setGuestNum} >
            <GuestNumSetButton guestType="성인" rightButton="removeAdult" leftButton="addAdult" numbers={contextValue.adultNum} />
            <GuestNumSetButton guestType="어린이" rightButton="removeChildren" leftButton="addChildren" numbers={contextValue.childNum} />
            <GuestNumSetButton guestType="유아" rightButton="removeToddler" leftButton="addToddler" numbers={contextValue.toddlerNum} />
            <DeleteApplyStyle>
                <DeleteButtonStyle visible={contextValue.isPanelDeleteButtonActivated.guest}  name="reset" onClick={resetGuestNum}>
                    { contextValue.isPanelDeleteButtonActivated.guest ? '삭제' : null }
                </DeleteButtonStyle>
                <ApplyButtonStyle name="apply" onClick={applyGuestNum}>
                    적용
                </ApplyButtonStyle>
            </DeleteApplyStyle>
        </OptionTabStyle>
    );
};

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
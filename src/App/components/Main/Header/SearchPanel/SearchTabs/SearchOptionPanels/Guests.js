import React, { useContext } from 'react';
import styled from 'styled-components';
import OptionTabStyle from './OptionTabStyle';
import { OptionPanelSetContext } from '../../../Header';
import { ClosePanelContext } from '../../../../Main'
import { FetchQueryContext } from '../../../../Main'
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

    const optionPanelSetContext = useContext(OptionPanelSetContext);

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
            (props.name === "removeAdult" && optionPanelSetContext.removeAdult === false) ||
            (props.name === "removeChildren" && optionPanelSetContext.removeChildren === false) ||
            (props.name === "removeToddler" && optionPanelSetContext.removeToddler === false) ||
            (props.name === "addAdult" && optionPanelSetContext.addAdult === false) ||
            (props.name === "addChildren" && optionPanelSetContext.addChildren === false) ||
            (props.name === "addToddler" && optionPanelSetContext.addToddler === false)
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

function Guests(props) {
    const optionPanelSetContext = useContext(OptionPanelSetContext);
    const closePanelContext = useContext(ClosePanelContext);
    const fetchQueryContext = useContext(FetchQueryContext);

    const setGuestNum = (event) => {
        const name = event.target.name;
        if (event.target.tagName !== 'BUTTON') return;
        if (name === "addAdult" || name === "addChildren" || name === "addToddler" ) {
            optionPanelSetContext.toggleTabOnOff('guests', true);
            optionPanelSetContext.setIsPanelDeleteButtonActivated({...optionPanelSetContext.isPanelDeleteButtonActivated, guest : true});
        } 
        checkIsRemoveAdultActivated(name); 
        optionPanelSetContext.dispatchGuestNum({ type: name });
    };

    const checkIsRemoveAdultActivated = (name) => {
        if (( name === "removeAdult" && optionPanelSetContext.totalNum === 2 && optionPanelSetContext.adultNum === 2) ||
        ( name === "removeChildren" && optionPanelSetContext.totalNum === 2 && optionPanelSetContext.childNum === 1) ||
        ( name === "removeToddler" && optionPanelSetContext.totalNum === 1 && optionPanelSetContext.toddlerNum === 1)) {
         optionPanelSetContext.setIsPanelDeleteButtonActivated({...optionPanelSetContext.isPanelDeleteButtonActivated, guest : false});
        } 
    };

    const resetGuestNum = (event) => {
        event.stopPropagation();
        optionPanelSetContext.dispatchGuestNum({ type: 'reset' });
        optionPanelSetContext.setIsPanelDeleteButtonActivated({...optionPanelSetContext.isPanelDeleteButtonActivated, guest : false});
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
        if(optionPanelSetContext.adultNum === 0) {
            queryString += templateGuest.adults.replace(regExpGuest.adults, 1);
        } else if(optionPanelSetContext.adultNum > 0) {
            queryString += templateGuest.adults.replace(regExpGuest.adults, optionPanelSetContext.adultNum);
        }
        if(optionPanelSetContext.childNum > 0) {
            queryString += templateGuest.children.replace(regExpGuest.children, optionPanelSetContext.childNum);
        } 
        if(optionPanelSetContext.toddlerNum > 0) {
            queryString += templateGuest.infants.replace(regExpGuest.infants, optionPanelSetContext.toddlerNum);
        } 
        return queryString;
    }

    const applyGuestNum = (event) => {
        event.stopPropagation();
        if(optionPanelSetContext.adultNum === 0) {
            optionPanelSetContext.dispatchGuestNum({ type: 'addAdult' });
            optionPanelSetContext.toggleTabOnOff('guests', true);
        }

        fetchQueryContext.queryString.str = fetchQueryContext.queryString.str.replace(queryToClear, "");
        let generatedQuery = generateQueryString();
        queryToClear = generatedQuery;
        fetchQueryContext.queryString.str  += generatedQuery;
        fetchQueryContext.operateFetchQuery(fetchQueryContext.queryString.str);
        closePanelContext.setSelectedTab('none');
    };
    
    return (
        <OptionTabStyle onClick={setGuestNum} >
            <GuestNumSetButton guestType="성인" rightButton="removeAdult" leftButton="addAdult" numbers={optionPanelSetContext.adultNum} />
            <GuestNumSetButton guestType="어린이" rightButton="removeChildren" leftButton="addChildren" numbers={optionPanelSetContext.childNum} />
            <GuestNumSetButton guestType="유아" rightButton="removeToddler" leftButton="addToddler" numbers={optionPanelSetContext.toddlerNum} />
            <DeleteApplyStyle>
                <DeleteButtonStyle visible={optionPanelSetContext.isPanelDeleteButtonActivated.guest}  name="reset" onClick={resetGuestNum}>
                    { optionPanelSetContext.isPanelDeleteButtonActivated.guest ? '삭제' : null }
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
export default Guests;
import React, { useContext } from 'react';
import styled from 'styled-components';
import SearchOptionPanelStyle from './SearchOptionPanelStyle';
import { OptionPanelSetContext } from '../../../Header';
import { ClosePanelContext } from '../../../../Main'
import { FetchQueryContext } from '../../../../Main'
import { ClearApplyStyle } from './ClearApplyStyle';
import { ApplyButtonStyle } from './ClearApplyStyle';
import { ClearButtonStyle } from './ClearApplyStyle';

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
            (props.name === "removeAdults" && optionPanelSetContext.removeAdults === false) ||
            (props.name === "removeChildren" && optionPanelSetContext.removeChildren === false) ||
            (props.name === "removeInfants" && optionPanelSetContext.removeInfants === false) ||
            (props.name === " addAdults" && optionPanelSetContext. addAdults === false) ||
            (props.name === "addChildren" && optionPanelSetContext.addChildren === false) ||
            (props.name === " addInfants" && optionPanelSetContext. addInfants === false)
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

const GuestsNumSetButton = (props) => {

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

    const setGuestsNum = (event) => {
        const name = event.target.name;
        if (event.target.tagName !== 'BUTTON') return;
        if (name === " addAdults" || name === "addChildren" || name === " addInfants" ) {
            optionPanelSetContext.toggleTabOnOff('guests', true);
            optionPanelSetContext.setIsPanelClearButtonActivated({...optionPanelSetContext.isPanelClearButtonActivated, guests : true});
        } 
        checkIsRemoveAdultActivated(name); 
        optionPanelSetContext.dispatchGuestsNum({ type: name });
    };

    const checkIsRemoveAdultActivated = (name) => {
        if (( name === "removeAdults" && optionPanelSetContext.totalNum === 2 && optionPanelSetContext.adultsNum === 2) ||
        ( name === "removeChildren" && optionPanelSetContext.totalNum === 2 && optionPanelSetContext.childrenNum === 1) ||
        ( name === "removeInfants" && optionPanelSetContext.totalNum === 1 && optionPanelSetContext.infantsNum === 1)) {
         optionPanelSetContext.setIsPanelClearButtonActivated({...optionPanelSetContext.isPanelClearButtonActivated, guests : false});
        } 
    };

    const clearGuestNum = (event) => {
        event.stopPropagation();
        optionPanelSetContext.dispatchGuestsNum({ type: 'clear' });
        optionPanelSetContext.setIsPanelClearButtonActivated({...optionPanelSetContext.isPanelClearButtonActivated, guests : false});
    };


    const templateGuest = {
        adults: `&adults={{adults}}`,
        children: `&children={{children}}`,
        infants: `&infants={{infants}}`
    }

    const regExpGuest = {
        adults: new RegExp('{{adults}}'),
        children: new RegExp('{{children}}'),
        infants: new RegExp('{{infants}}')
    }

    // 쿼리 생성(각 검색 옵션 패널마다 상이)
    const generateQueryString = () => {
        let queryString = "";
        if(optionPanelSetContext.adultsNum === 0) {
            queryString += templateGuest.adults.replace(regExpGuest.adults, 1);
        } else if(optionPanelSetContext.adultsNum > 0) {
            queryString += templateGuest.adults.replace(regExpGuest.adults, optionPanelSetContext.adultsNum);
        }
        if(optionPanelSetContext.childrenNum > 0) {
            queryString += templateGuest.children.replace(regExpGuest.children, optionPanelSetContext.childrenNum);
        } 
        if(optionPanelSetContext.infantsNum > 0) {
            queryString += templateGuest.infants.replace(regExpGuest.infants, optionPanelSetContext.infantsNum);
        } 
        return queryString;
    }

    const applyGuestNum = (event) => {
        event.stopPropagation();
        if(optionPanelSetContext.adultsNum === 0) {
            optionPanelSetContext.dispatchGuestsNum({ type: ' addAdults' });
            optionPanelSetContext.toggleTabOnOff('guests', true);
        }

        fetchQueryContext.queryString.str = fetchQueryContext.queryString.str.replace(queryToClear, "");
        let generatedQuery = generateQueryString();
        queryToClear = generatedQuery;
        fetchQueryContext.queryString.str  += generatedQuery;
        fetchQueryContext.operateFetchQuery(fetchQueryContext.queryString.str);
        closePanelContext.setIsSearchOptionPanelsActivated({
            ...closePanelContext.isSearchOptionPanelsActivated, guests : false
        });
        closePanelContext.clearDimmedSections();
    };
    
    return (
        <SearchOptionPanelStyle onClick={setGuestsNum} >
            <GuestsNumSetButton guestType="성인" rightButton="removeAdults" leftButton=" addAdults" numbers={optionPanelSetContext.adultsNum} />
            <GuestsNumSetButton guestType="어린이" rightButton="removeChildren" leftButton="addChildren" numbers={optionPanelSetContext.childrenNum} />
            <GuestsNumSetButton guestType="유아" rightButton="removeInfants" leftButton=" addInfants" numbers={optionPanelSetContext.infantsNum} />
            <ClearApplyStyle>
                <ClearButtonStyle visible={optionPanelSetContext.isPanelClearButtonActivated.guests}  name="clear" onClick={clearGuestNum}>
                    { optionPanelSetContext.isPanelClearButtonActivated.guests ? '삭제' : null }
                </ClearButtonStyle>
                <ApplyButtonStyle name="apply" onClick={applyGuestNum}>
                    적용
                </ApplyButtonStyle>
            </ClearApplyStyle>
        </SearchOptionPanelStyle>
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
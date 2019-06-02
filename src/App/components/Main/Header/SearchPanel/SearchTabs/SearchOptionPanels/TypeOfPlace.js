import React, { useContext } from 'react';
import styled from 'styled-components';
import SearchOptionPanelStyle from './SearchOptionPanelStyle';
import { OptionPanelSetContext } from '../../../Header';
import { ClosePanelContext } from '../../../../Main'
import { FetchQueryContext } from '../../../../Main'
import { ClearApplyStyle } from './ClearApplyStyle';
import { ApplyButtonStyle } from './ClearApplyStyle';
import { ClearButtonStyle } from './ClearApplyStyle';
import Checkbox from '@material-ui/core/Checkbox';

const typeOfPlaceDesc = {
    entireRoom: "집 전체를 단독으로 사용합니다.",
    privateRoom: "침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다.",
    hotelRoom: "부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다.",
    sharedRoom: "사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다."
}

let queryToClear = "";

function TypeOfPlace(props) {

    const optionPanelSetContext = useContext(OptionPanelSetContext);
    const closePanelContext = useContext(ClosePanelContext);
    const fetchQueryContext = useContext(FetchQueryContext);

    const checkboxStyle = {
        color : "#519D9E",
        padding: "5px 10px 5px 5px"
    };

    const checkTypeOfPlace = (event) => {
        const name = event.target.name;
        const isChecked = event.target.checked;
        optionPanelSetContext.dispatchTypeOfPlace({type: 'check', payload: {name : name, isChecked: isChecked} });
        optionPanelSetContext.toggleTabOnOff('typeOfPlace', checkTypeOfPlaceStates(isChecked, name)); 
    };

    const checkTypeOfPlaceStates = (isChecked, name) => {
        optionPanelSetContext.typeOfPlaceStates[name] = isChecked; 
        if(Object.values(optionPanelSetContext.typeOfPlaceStates).includes(true)) { 
            optionPanelSetContext.setIsPanelClearButtonActivated({...optionPanelSetContext.isPanelClearButtonActivated, typeOfPlace : true});
            return true; 
        } else { 
            optionPanelSetContext.setIsPanelClearButtonActivated({...optionPanelSetContext.isPanelClearButtonActivated, typeOfPlace : false});
            return false; 
        };
    };

    const clearChecked = (event) => {
        event.stopPropagation();
        optionPanelSetContext.dispatchTypeOfPlace({type: 'clear'})
        optionPanelSetContext.clearTypeOfPlace(); 
        optionPanelSetContext.toggleTabOnOff('typeOfPlace', false); 
        optionPanelSetContext.setIsPanelClearButtonActivated({...optionPanelSetContext.isPanelClearButtonActivated, typeOfPlace : false});
        
        fetchQueryContext.queryString.str = fetchQueryContext.queryString.str.replace(queryToClear, "");
    };

    const TypeOfPlaceCheck = (props) => {
        return (
            <Checkbox style ={checkboxStyle} name={props.name} checked={props.typeOfPlace} onChange={props.checkTypeOfPlace} />
        )
    };

    // 적용 버튼 클릭
    const applyTypeOfPlace = (event) => {
        event.stopPropagation();
        closePanelContext.setIsSearchOptionPanelsActivated({
            ...closePanelContext.isSearchOptionPanelsActivated, typeOfPlace: false
        });
        closePanelContext.clearDimmedSections(); 

        fetchQueryContext.queryString.str = fetchQueryContext.queryString.str.replace(queryToClear, "");
        let generatedQuery = generateQueryString();
        queryToClear = generatedQuery;
        fetchQueryContext.queryString.str  += generatedQuery;
        fetchQueryContext.operateFetchQuery(fetchQueryContext.queryString.str);
    };

    // 쿼리 생성(각 검색 옵션 패널마다 상이)
    const generateQueryString = () => {
        let queryString = "";
        const template = `&roomType={{}}`
        let regExp = new RegExp('{{}}');
        for(let type in optionPanelSetContext.typeOfPlaceStates) {
            if(optionPanelSetContext.typeOfPlaceStates[type]) {
                let selectedType = type;
                queryString += template.replace(regExp, selectedType);
            }
        };
        return queryString;
    }

    return (
        <SearchOptionPanelStyle>
            <TypeOfPlaceDiv>
                <TypeOfPlaceCheck name='entireRoom' typeOfPlace={optionPanelSetContext.typeOfPlace.entireRoom} checkTypeOfPlace={checkTypeOfPlace} />집 전체<br />
                <TypeOfPlaceDescStyle>{typeOfPlaceDesc.entireRoom}</TypeOfPlaceDescStyle>
            </TypeOfPlaceDiv>
            <TypeOfPlaceDiv>
                <TypeOfPlaceCheck name='privateRoom' typeOfPlace={optionPanelSetContext.typeOfPlace.privateRoom} checkTypeOfPlace={checkTypeOfPlace} />개인실<br />
                <TypeOfPlaceDescStyle>{typeOfPlaceDesc.privateRoom}</TypeOfPlaceDescStyle>
            </TypeOfPlaceDiv>
            <TypeOfPlaceDiv>
                <TypeOfPlaceCheck name='hotelRoom' typeOfPlace={optionPanelSetContext.typeOfPlace.hotelRoom} checkTypeOfPlace={checkTypeOfPlace} />호텔 객실<br />
                <TypeOfPlaceDescStyle>{typeOfPlaceDesc.hotelRoom}</TypeOfPlaceDescStyle>
            </TypeOfPlaceDiv>
            <TypeOfPlaceDiv>
                <TypeOfPlaceCheck name='sharedRoom' typeOfPlace={optionPanelSetContext.typeOfPlace.sharedRoom} checkTypeOfPlace={checkTypeOfPlace} />다인실<br />
                <TypeOfPlaceDescStyle>{typeOfPlaceDesc.sharedRoom}</TypeOfPlaceDescStyle>
            </TypeOfPlaceDiv>
            <ClearApplyStyle>
                <ClearButtonStyle visible={optionPanelSetContext.isPanelClearButtonActivated.typeOfPlace} name="clear" style={{ cursor: 'pointer' }} onClick={clearChecked}>
                    { optionPanelSetContext.isPanelClearButtonActivated.typeOfPlace ? '삭제' : null }
                </ClearButtonStyle>
                <ApplyButtonStyle onClick={applyTypeOfPlace}>
                    적용
                </ApplyButtonStyle>
            </ClearApplyStyle>
        </SearchOptionPanelStyle>
    );
};

const TypeOfPlaceDescStyle = styled.p`
    padding-left: 39px; 
    margin: 0px; 
`

const TypeOfPlaceDiv = styled.div`
    margin: 10px; 
`

export default TypeOfPlace; 
import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import SearchField from './SearchField/SearchField';
import SearchPanel from './SearchPanel/SearchPanel';
import updateGuestsReducer from './SearchPanel/SearchTabs/stateReducers/updateGuestsReducer';
import updateTypeOfPlaceReducer from './SearchPanel/SearchTabs/stateReducers/updateTypeOfPlaceReducer';
import updatePriceReducer from './SearchPanel/SearchTabs/stateReducers/updatePriceReducer';
import { searchOptionPanelsfilterValues } from '../../../setting_values/setting_values';
import { searchOptionTabsValues } from '../../../setting_values/setting_values';
import { searchOptionPanelsValues } from '../../../setting_values/setting_values';

const { datesValues, guestsValues, typeOfPlaceValues, priceValues, instantBookValues } = searchOptionPanelsfilterValues;
const { tabActivated, tabStatesToClear } = searchOptionTabsValues;
const { panelClearButtonActivated, panelStatesToClear } = searchOptionPanelsValues;

export const ClearContext = React.createContext();
export const OptionPanelSetContext = React.createContext();

function Header() {

    // 날짜 state
    const [checkIn, setCheckIn] = useState(datesValues.checkIn);
    const [checkOut, setCheckOut] = useState(datesValues.checkOut);
    const [focusedInput, setFocusedInput] = useState("startDate");

    // 인원 state
    const [guestsNum, dispatchGuestsNum] = useReducer(updateGuestsReducer, guestsValues);

    // 숙소타입 state
    const [typeOfPlace, dispatchTypeOfPlace] = useReducer(updateTypeOfPlaceReducer, typeOfPlaceValues);

    // 즉시예약 state
    const [isInstantBookChecked, setIsInstantBookChecked] = useState(instantBookValues);
    const toggleInstantBookChecked = () => {
        setIsInstantBookChecked({ isChecked: !isInstantBookChecked.isChecked });
    };

    // 가격 state
    const [price, dispatchSetPrice] = useReducer(updatePriceReducer, priceValues);

    // 검색 옵션 탭 활성화 state    
    const [isSearchOptionTabActivated, setIsSearchOptionTabActivated] = useState(tabActivated);

    // 검색 옵션 탭 하이라이트 토글
    const toggleTabOnOff = (name, isActivated) => {
        setIsSearchOptionTabActivated({ ...isSearchOptionTabActivated, [name]: isActivated });
    };

    // 패널 삭제 버튼 활성화 토글
    const [isPanelClearButtonActivated, setIsPanelClearButtonActivated] = useState(panelClearButtonActivated);

    // 패널 설정 일괄 초기화
    const clearAll = () => {
        setIsSearchOptionTabActivated({ ...tabStatesToClear });
        dispatchGuestsNum({ type: 'clearAll' });
        dispatchTypeOfPlace({ type: 'clear' });
        setIsInstantBookChecked({ isChecked: false });
        dispatchSetPrice({ type: 'clear' });
        setIsPanelClearButtonActivated({ ...panelStatesToClear });
    };

    const SearchOptionDatesPanelProps = {
        checkIn: checkIn,
        setCheckIn: setCheckIn,
        checkOut: checkOut,
        setCheckOut: setCheckOut,
        focusedInput: focusedInput,
        setFocusedInput: setFocusedInput
    }

    const SearchOptionGuestsPanelProps = {
        guestsNum: guestsNum,
        totalNum: guestsNum.totalNum,
        adultsNum: guestsNum.adultsNum,
        childrenNum: guestsNum.childrenNum,
        infantsNum: guestsNum.infantsNum,
        removeAdults: guestsNum.removeAdults,
        addAdults: guestsNum.addAdults,
        removeChildren: guestsNum.removeChildren,
        addChildren: guestsNum.addChildren,
        removeInfants: guestsNum.removeInfants,
        addInfants: guestsNum.addInfants,
        dispatchGuestsNum: dispatchGuestsNum
    };

    const SearchOptionTypeOfPlacePanelProps = {
        dispatchTypeOfPlace: dispatchTypeOfPlace,
        typeOfPlace: typeOfPlace,
    };

    const SearchOptionInstantBookPanelProps = {
        isInstantBookChecked: isInstantBookChecked,
        toggleInstantBookChecked: toggleInstantBookChecked
    };

    const SearchOptionPricePanelProps = {
        price: price,
        dispatchSetPrice: dispatchSetPrice,
    };

    return (
        <FixedHeader>
            <ClearContext.Provider value={{ clearAll: clearAll, toggleTabOnOff: toggleTabOnOff }}>
                <OptionPanelSetContext.Provider value={{
                    ...SearchOptionDatesPanelProps,
                    ...SearchOptionGuestsPanelProps,
                    ...SearchOptionTypeOfPlacePanelProps,
                    ...SearchOptionInstantBookPanelProps,
                    ...SearchOptionPricePanelProps,
                    toggleTabOnOff: toggleTabOnOff,
                    isSearchOptionTabActivated: isSearchOptionTabActivated,
                    isPanelClearButtonActivated: isPanelClearButtonActivated,
                    setIsPanelClearButtonActivated: setIsPanelClearButtonActivated,

                    typeOfPlaceStates: typeOfPlaceStates,
                    clearTypeOfPlace: clearTypeOfPlace
                }}>
                    <SearchField />
                    <SearchPanel />
                </OptionPanelSetContext.Provider>
            </ClearContext.Provider>
        </FixedHeader>
    );
};

const FixedHeader = styled.div`
    width:100%;
    height:142px;
    position: fixed;
    z-index:1000; 
`

const typeOfPlaceStates = {
    entireRoom: false,
    privateRoom: false,
    hotelRoom: false,
    sharedRoom: false
}

const clearTypeOfPlace = () => {
    for (let type in typeOfPlaceStates) {
        typeOfPlaceStates[type] = false;
    };
};

export default Header;
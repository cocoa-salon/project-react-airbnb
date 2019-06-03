import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import SearchField from './SearchField/SearchField';
import SearchPanel from './SearchPanel/SearchPanel';
import updateGuestsReducer from './SearchPanel/SearchTabs/stateReducers/updateGuestsReducer';
import updateTypeOfPlaceReducer from './SearchPanel/SearchTabs/stateReducers/updateTypeOfPlaceReducer';
import updatePriceReducer from './SearchPanel/SearchTabs/stateReducers/updatePriceReducer';

export const ClearContext = React.createContext();
export const OptionPanelSetContext = React.createContext();

function Header() {

    // 인원 state
    const [guestsNum, dispatchGuestsNum] = useReducer(updateGuestsReducer, {
        adultsNum: 0,
        childrenNum: 0,
        infantsNum: 0,
        totalNum: 0,
        removeAdults: false,
        addAdults: true,
        removeChildren: false,
        addChildren: true,
        removeInfants: false,
        addInfants: true,
    });

    // 숙소타입 state
    const [typeOfPlace, dispatchTypeOfPlace] = useReducer(updateTypeOfPlaceReducer, {
        entireRoom: false,
        privateRoom: false,
        hotelRoom: false,
        sharedRoom: false
    });

    // 즉시예약 state
    const [isInstantBookChecked, setIsInstantBookChecked] = useState({ isChecked: false });
    const toggleInstantBookChecked = () => {
        setIsInstantBookChecked({ isChecked: !isInstantBookChecked.isChecked });
    };

    // 가격 state
    const [price, dispatchSetPrice] = useReducer(updatePriceReducer, {
        defaultMin: 10000,
        defaultMax: 500000,
        min: 10000,
        max: 500000,
        tabMsg: '가격'
    });

    // 검색 옵션 탭 활성화 state    
    const [isSearchOptionTabActivated, setIsSearchOptionTabActivated] = useState({
        dates: false,
        guests: false,
        typeOfPlace: false,
        instantBook: false,
        price: false,
        time: false,
        moreFilters: false
    });

    // 검색 옵션 탭 하이라이트 토글
    const toggleTabOnOff = (name, isActivated) => {
        setIsSearchOptionTabActivated({ ...isSearchOptionTabActivated, [name]: isActivated });
    };

    // 패널 삭제 버튼 활성화 토글
    const [isPanelClearButtonActivated, setIsPanelClearButtonActivated] = useState({
        dates: false,
        guests: false,
        typeOfPlace: false,
        instantBook: false,
        price: false,
        time: false,
        moreFilters: false
    });

    // 패널 설정 일괄 초기화
    const clearAll = () => {
        setIsSearchOptionTabActivated({
            dates: false,
            guests: false,
            typeOfPlace: false,
            instantBook: false,
            price: false,
            time: false,
            moreFilters: false
        });
        dispatchGuestsNum({ type: 'clearAll' });
        dispatchTypeOfPlace({ type: 'clear' });
        setIsInstantBookChecked({ isChecked: false });
        dispatchSetPrice({ type: 'clear' });
        setIsPanelClearButtonActivated({
            dates: false,
            guests: false,
            typeOfPlace: false,
            instantBook: false,
            price: false,
            time: false,
            moreFilters: false
        });
    };

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
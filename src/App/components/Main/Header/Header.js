import React, { useState, useReducer } from 'react';
import SearchField from './SearchField/SearchField';
import SearchPanel from './SearchPanel/SearchPanel';
import { checkGuestNumReducer } from './SearchPanel/SearchTabs/stateReducers/checkGuestNumReducer';
import { typeOfPlaceCheckReducer } from './SearchPanel/SearchTabs/stateReducers/typeOfPlaceCheckReducer';
import { setPriceReducer } from './SearchPanel/SearchTabs/stateReducers/setPriceReducer';

export const ResetContext = React.createContext();
export const OptionPanelSetContext = React.createContext();

function Header() {

    // 인원 state
    const [guestNum, dispatchGuestNum] = useReducer(checkGuestNumReducer, {
        adultNum: 0,
        childNum: 0,
        toddlerNum: 0,
        totalNum: 0,
        removeAdult: false,
        addAdult: true,
        removeChildren: false,
        addChildren: true,
        removeToddler: false,
        addToddler: true,
    });

    // 숙소타입 state
    const [typeOfPlace, dispatchTypeOfPlace] = useReducer(typeOfPlaceCheckReducer, {
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
    const [price, dispatchSetPrice] = useReducer(setPriceReducer, {
        defaultMin: 10000,
        defaultMax: 500000,
        min: 10000,
        max: 500000,
        tabMsg: '가격'
    });

    // 검색 옵션 탭 활성화 state    
    const [isSearchOptionTabActivated, setIsSearchOptionTabActivated] = useState({
        date: false,
        guest: false,
        typeOfPlace: false,
        instantBook: false,
        price: false,
        time: false,
        filterAdd: false
    });

    // 검색 옵션 탭 하이라이트 토글
    const toggleTabOnOff = (name, isActivated) => {
        setIsSearchOptionTabActivated({ ...isSearchOptionTabActivated, [name]: isActivated });
    };

    // 패널 삭제 버튼 활성화 토글
    const [isPanelDeleteButtonActivated, setIsPanelDeleteButtonActivated] = useState({
        dates: false,
        guests: false,
        typeOfPlace: false,
        instantBook: false,
        price: false,
        time: false,
        moreFilters: false
    });

    // 패널 설정 일괄 초기화
    const resetAll = () => {
        setIsSearchOptionTabActivated({
            date: false,
            guest: false,
            typeOfPlace: false,
            instantBook: false,
            price: false,
            time: false,
            filterAdd: false
        });
        dispatchGuestNum({ type: 'resetAll' });
        dispatchTypeOfPlace({ type: 'reset' });
        setIsInstantBookChecked({ isChecked: false });
        dispatchSetPrice({ type: 'reset' });
        setIsPanelDeleteButtonActivated({
            date: false,
            guest: false,
            typeOfPlace: false,
            instantBook: false,
            price: false,
            time: false,
            filterAdd: false
        });
    };

    const SearchOptionGuestPanelProps = {
        guestNum: guestNum,
        totalNum: guestNum.totalNum,
        adultNum: guestNum.adultNum,
        childNum: guestNum.childNum,
        toddlerNum: guestNum.toddlerNum,
        removeAdult: guestNum.removeAdult,
        addAdult: guestNum.addAdult,
        removeChildren: guestNum.removeChildren,
        addChildren: guestNum.addChildren,
        removeToddler: guestNum.removeToddler,
        addToddler: guestNum.addToddler,
        dispatchGuestNum: dispatchGuestNum
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
        <ResetContext.Provider value={{ resetAll: resetAll, toggleTabOnOff: toggleTabOnOff }}>
            <OptionPanelSetContext.Provider value={{
                ...SearchOptionGuestPanelProps,
                ...SearchOptionTypeOfPlacePanelProps,
                ...SearchOptionInstantBookPanelProps,
                ...SearchOptionPricePanelProps,
                toggleTabOnOff: toggleTabOnOff,
                isSearchOptionTabActivated: isSearchOptionTabActivated,
                isPanelDeleteButtonActivated: isPanelDeleteButtonActivated,
                setIsPanelDeleteButtonActivated: setIsPanelDeleteButtonActivated,

                typeOfPlaceStates: typeOfPlaceStates,
                clearTypeOfPlace: clearTypeOfPlace
            }}>
                <SearchField />
                <SearchPanel />
            </OptionPanelSetContext.Provider>
        </ResetContext.Provider>
    );
};

const typeOfPlaceStates = {
    entireRoom: false,
    privateRoom: false,
    hotelRoom: false,
    sharedRoom: false
}

const clearTypeOfPlace = () => {
    for(let type in typeOfPlaceStates) {
        typeOfPlaceStates[type] = false; 
    };
};

export default Header;
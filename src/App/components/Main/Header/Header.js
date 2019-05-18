import React, { useState, useReducer } from 'react';
import SearchField from './SearchField/SearchField';
import SearchPanel from './SearchPanel/SearchPanel';
import { checkGuestNumReducer } from './SearchPanel/SearchTabs/stateReducers/checkGuestNumReducer';
import { innTypeCheckReducer } from './SearchPanel/SearchTabs/stateReducers/innTypeCheckReducer';
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
    const [innTypes, dispatchInnTypes] = useReducer(innTypeCheckReducer, {
        allhouse: false,
        privateRoom: false,
        hotelRoom: false,
        publicRoom: false
    });

    // 즉시예약 state
    const [isInstantBookChecked, setIsInstantBookChecked] = useState({ isChecked: false });
    const toggleInstantBookChecked = () => {
        setIsInstantBookChecked({ isChecked: !isInstantBookChecked.isChecked });
    };

    // 가격 state
    const [price, dispatchSetPrice] = useReducer(setPriceReducer, {
        defaultMin: 12000,
        defaultMax: 1000000,
        min: 12000,
        max: 1000000,
        tabMsg: '가격'
    });

    // 검색 옵션 탭 활성화 state    
    const [isSearchOptionTabActivated, SetIsTabActivated] = useState({
        date: false,
        guest: false,
        innType: false,
        instantBook: false,
        price: false,
        time: false,
        filterAdd: false
    });

    // 검색 옵션 탭 하이라이트 토글
    const toggleTabOnOff = (name, isActivated) => {
        SetIsTabActivated({ ...isSearchOptionTabActivated, [name]: isActivated });
    };

    const [isPanelDeleteButtonActivated, setIsPanelDeleteButtonActivated] = useState({
            date: false,
            guest: false,
            innType: false,
            instantBook: false,
            price: false,
            time: false,
            filterAdd: false
    });

    // 패널 설정 일괄 초기화
    const resetAll = () => {
        SetIsTabActivated({
            date: false,
            guest: false,
            innType: false,
            instantBook: false,
            price: false,
            time: false,
            filterAdd: false
        });
        dispatchGuestNum({ type: 'resetAll' });
        dispatchInnTypes({ type: 'reset' });
        setIsInstantBookChecked({ isChecked: false });
        dispatchSetPrice({ type: 'reset' });
        setIsPanelDeleteButtonActivated({date: false,
            guest: false,
            innType: false,
            instantBook: false,
            price: false,
            time: false,
            filterAdd: false});
    };

    const SearchOptionGuestPanelProps = {
        guestNum: guestNum,
        dispatchGuestNum: dispatchGuestNum,
    };

    const SearchOptionInnTypePanelProps = {
        dispatchInnTypes: dispatchInnTypes,
        innTypes: innTypes,
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
                ...SearchOptionInnTypePanelProps,
                ...SearchOptionInstantBookPanelProps,
                ...SearchOptionPricePanelProps,
                toggleTabOnOff: toggleTabOnOff,
                isSearchOptionTabActivated: isSearchOptionTabActivated,
                isPanelDeleteButtonActivated: isPanelDeleteButtonActivated,
                setIsPanelDeleteButtonActivated: setIsPanelDeleteButtonActivated
            }}>
                <SearchField />
                <SearchPanel />
            </OptionPanelSetContext.Provider>
        </ResetContext.Provider>
    );
};

export default Header;
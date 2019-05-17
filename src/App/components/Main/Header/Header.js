import React, { useState, useReducer } from 'react';
import SearchField from './SearchField/SearchField';
import SearchPanel from './SearchPanel/SearchPanel';
import { checkGuestNumReducer } from './SearchPanel/SearchTabs/stateReducers/checkGuestNumReducer'
import { innTypeCheckReducer } from './SearchPanel/SearchTabs/stateReducers/innTypeCheckReducer';

export const ResetContext = React.createContext();
export const OptionPanelSetContext = React.createContext();

function Header() {

    // 가격 state
    const [price, setPrice] = useState({
        defaultMin : 12000,
        defaultMax : 1000000,
        min: 12000,
        max: 1000000,
        tabMsg: '가격'
    })

    const handleChange = (event) => {
        setPrice({...price, min: event[0], max: event[1]});
    }

    const handleChangeMin = (minValue) => {
        setPrice({...price, min: minValue});
    }

    const handleChangeMax = (maxValue) => {
        setPrice({...price, max: maxValue});
    }

    const resetChecked = () => {
        setPrice({
            defaultMin : 12000,
            defaultMax : 1000000,
            min: 12000,
            max: 1000000,
            tabMsg: '가격'
        });
        toggleTabOnOff("price", false);
    }

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
    }

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
    }

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
        dispatchGuestNum({type: 'resetAll'});
        dispatchInnTypes({type: 'reset'});        
        setIsInstantBookChecked({isChecked : false});
        setPrice({
            defaultMin : 12000,
            defaultMax : 1000000,
            min: 12000,
            max: 1000000,
            tabMsg: '가격'
        });
    }

    const SearchOptionGuestPanelProps = {
        guestNum: guestNum,
        dispatchGuestNum : dispatchGuestNum,
        adultNum: guestNum.adultNum,
        childNum: guestNum.childNum,
        toddlerNum: guestNum.toddlerNum,
    }
    
    const SearchOptionInnTypePanelProps = {
        dispatchInnTypes: dispatchInnTypes,
        innTypes: innTypes,
    };
    
    const SearchOptionInstantBookPanelProps = {
        isInstantBookChecked: isInstantBookChecked,
        toggleInstantBookChecked: toggleInstantBookChecked
    }

    const SearchOptionPricePanelProps = {
        price : price,
        setPrice: setPrice,
        handleChange: handleChange,
        handleChangeMin: handleChangeMin,
        handleChangeMax: handleChangeMax,
        resetChecked: resetChecked
    }   
    return (
        <ResetContext.Provider value={{ resetAll: resetAll, toggleTabOnOff: toggleTabOnOff }}>
            <OptionPanelSetContext.Provider value={{ 
                ...SearchOptionGuestPanelProps, 
                ...SearchOptionInnTypePanelProps, 
                ...SearchOptionInstantBookPanelProps,
                ...SearchOptionPricePanelProps,
                toggleTabOnOff: toggleTabOnOff,
                isSearchOptionTabActivated: isSearchOptionTabActivated, 
                totalNum: guestNum.totalNum,
                toddlerNum: guestNum.toddlerNum 
            }}>  
                <SearchField />
                <SearchPanel />
            </OptionPanelSetContext.Provider>
        </ResetContext.Provider>
    )
}

export default Header;
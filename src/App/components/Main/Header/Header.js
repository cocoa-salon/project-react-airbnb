import React, { useState, useReducer } from 'react';
import SearchField from './SearchField/SearchField';
import SearchPanel from './SearchPanel/SearchPanel';
import { checkGuestNumReducer } from './SearchPanel/SearchTabs/stateReducers/checkGuestNumReducer'
import { innTypeCheckReducer } from './SearchPanel/SearchTabs/stateReducers/innTypeCheckReducer';

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
    
    return (
        <ResetContext.Provider value={{ resetAll: resetAll, toggleTabOnOff: toggleTabOnOff }}>
            <OptionPanelSetContext.Provider value={{ 
                ...SearchOptionGuestPanelProps, 
                ...SearchOptionInnTypePanelProps, 
                ...SearchOptionInstantBookPanelProps,
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
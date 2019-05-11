import React, { useState, useEffect, useReducer } from 'react';

import { innTypeCheckReducer } from './stateReducers/innTypeCheckReducer';

import { AllSearchTab } from './AllSearchTab';
import { InnSearchTab } from './InnSearchTab';
import { RestaurantSearchTab } from './RestaurantSearchTab';
import { TripSearchTab } from './TripSearchTab';

import { SearchOptionPanels } from './SearchOptionPanels/SearchOptionPanels';

export const SearchOptionPanelContext = React.createContext();
const { Provider: SearchOptionPanelProvider } = SearchOptionPanelContext;

export const SearchTabContext = React.createContext();
const { Provider: SearchTabProvider } = SearchTabContext;

function SearchTabs(props) {
    const [optionTabUrl, setOptionTabUrl] = useState('');
    const [selectedButton, setSelectedButton] = useState(0);

    const [guestNum, setGuestNum] = useState({
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

    const guestNumLimit = {
        minAdultNum: 1,
        minChildNum: 0,
        minToddlerNum: 0,
        maxAdultNum: 16,
        maxChildNum: 5,
        maxToddlerNum: 5
    };

    const resetGuestNum = (event) => {
        const name = event.target.name;
        setGuestNum({
            adultNum: guestNumLimit.minAdultNum,
            childNum: 0,
            toddlerNum: 0,
            totalNum: 1,
            removeAdult: false,
            addAdult: true,
            removeChildren: false,
            addChildren: true,
            removeToddler: false,
            addToddler: true
        })
        setSelectedButton(name);
    }

    const calculateGuestNum = (buttonName) => {
        if (buttonName === "addAdult" || buttonName === "addChildren" || buttonName === "addToddler") increaseGuestNum(buttonName);
        else if (buttonName === "removeAdult" || buttonName === "removeChildren" || buttonName === "removeToddler") decreaseGuestNum(buttonName);
        setSelectedButton(buttonName);
    };

    const increaseGuestNum = (buttonName) => {
        if (buttonName === "addAdult") {
            addAdult();
        } else if (guestNum.adultNum === 0 && buttonName !== "addAdult") {
            addEssentialAdult(buttonName);
        } else if (buttonName === "addChildren") {
            addChild();
        } else if (buttonName === "addToddler") {
            addToddler();
        }
    };

    const addEssentialAdult = (buttonName) => {
        if (buttonName === "addChildren") {
            setGuestNum({ ...guestNum, adultNum: guestNum.adultNum + guestNumLimit.minAdultNum, childNum: guestNum.childNum + 1, totalNum: 2, removeChildren: true, addChildren: true });
        } if (buttonName === "addToddler") {
            setGuestNum({ ...guestNum, adultNum: guestNum.adultNum + guestNumLimit.minAdultNum, toddlerNum: 1, totalNum: 1, removeToddler: true, addToddler: true });
        }
    };

    const decreaseGuestNum = (buttonName) => {
        if (buttonName === "removeAdult") {
            removeAdult();
        } else if (buttonName === "removeChildren") {
            removeChild();
        } else if (buttonName === "removeToddler") {
            removeToddler();
        }
    }

    const addAdult = () => {
        if (guestNum.adultNum === 15) {
            setGuestNum({ ...guestNum, adultNum: guestNum.adultNum + 1, totalNum: guestNum.totalNum + 1, removeAdult: true, addAdult: false });
        }
        else if (guestNum.adultNum < guestNumLimit.maxAdultNum && guestNum.adultNum > guestNumLimit.minAdultNum) {
            setGuestNum({ ...guestNum, adultNum: guestNum.adultNum + 1, totalNum: guestNum.totalNum + 1, removeAdult: true, addAdult: true });
        }
        else if (guestNum.adultNum <= guestNumLimit.minAdultNum) {
            setGuestNum({ ...guestNum, adultNum: guestNum.adultNum + 1, totalNum: guestNum.totalNum + 1, removeAdult: true, addAdult: true });
            // 최대 도달(추가 불가)
        } else if (guestNum.adultNum >= guestNumLimit.maxAdultNum) {
            setGuestNum({ ...guestNum, removeAdult: true, addAdult: false });
        }

    }

    const addChild = () => {
        if (guestNum.childNum === 4) {
            setGuestNum({ ...guestNum, childNum: guestNum.childNum + 1, totalNum: guestNum.totalNum + 1, removeChildren: true, addChildren: false });
        } else if (guestNum.adultNum > 0 && guestNum.childNum < guestNumLimit.maxChildNum && guestNum.childNum > guestNumLimit.minChildNum) {
            setGuestNum({ ...guestNum, childNum: guestNum.childNum + 1, totalNum: guestNum.totalNum + 1, removeChildren: true, addChildren: true });
        } else if (guestNum.adultNum > 0 && guestNum.childNum <= guestNumLimit.minChildNum) {
            setGuestNum({ ...guestNum, childNum: guestNum.childNum + 1, totalNum: guestNum.totalNum + 1, removeChildren: true, addChildren: true });
        } else if (guestNum.adultNum > 0 && guestNum.childNum >= guestNumLimit.maxChildNum) {
            setGuestNum({ ...guestNum, removeChildren: true, addChildren: false });
        }

    }

    const addToddler = () => {
        if (guestNum.toddlerNum === 4) {
            setGuestNum({ ...guestNum, toddlerNum: guestNum.toddlerNum + 1, removeToddler: true, addToddler: false });
        } else if (guestNum.adultNum > 0 && guestNum.toddlerNum < guestNumLimit.maxToddlerNum && guestNum.toddlerNum > guestNumLimit.minToddlerNum) {
            setGuestNum({ ...guestNum, toddlerNum: guestNum.toddlerNum + 1, removeToddler: true, addToddler: true });
        } else if (guestNum.adultNum > 0 && guestNum.toddlerNum <= guestNumLimit.minToddlerNum) {
            setGuestNum({ ...guestNum, toddlerNum: guestNum.toddlerNum + 1, removeToddler: true, addToddler: true });
        } else if (guestNum.adultNum > 0 && guestNum.toddlerNum >= guestNumLimit.maxToddlerNum) {
            setGuestNum({ ...guestNum, removeToddler: true, addToddler: false });
        }

    }

    const removeAdult = () => {
        if (guestNum.adultNum <= guestNumLimit.minAdultNum) {
            setGuestNum({ ...guestNum, removeAdult: false, addAdult: true });
        } else if (guestNum.adultNum === 2) {
            setGuestNum({ ...guestNum, adultNum: guestNum.adultNum - 1, totalNum: guestNum.totalNum - 1, removeAdult: false, addAdult: true });
        } else if (guestNum.adultNum > guestNumLimit.minAdultNum && guestNum.adultNum <= guestNumLimit.maxAdultNum) {
            setGuestNum({ ...guestNum, adultNum: guestNum.adultNum - 1, totalNum: guestNum.totalNum - 1, removeAdult: true, addAdult: true });
        }

    }

    const removeChild = () => {
        if (guestNum.childNum <= guestNumLimit.minChildNum) {
            setGuestNum({ ...guestNum, removeChildren: false, addChildren: true });
        } else if (guestNum.childNum === 1) {
            setGuestNum({ ...guestNum, childNum: guestNum.childNum - 1, totalNum: guestNum.totalNum - 1, removeChildren: false, addChildren: true });
        } else if (guestNum.childNum > guestNumLimit.minChildNum && guestNum.childNum <= guestNumLimit.maxChildNum) {
            setGuestNum({ ...guestNum, childNum: guestNum.childNum - 1, totalNum: guestNum.totalNum - 1, removeChildren: true, addChildren: true });
        }
    }

    const removeToddler = () => {
        if (guestNum.toddlerNum <= guestNumLimit.minToddlerNum) {
            setGuestNum({ ...guestNum, removeToddler: false, addToddler: true });
        } else if (guestNum.toddlerNum === 1) {
            setGuestNum({ ...guestNum, toddlerNum: guestNum.toddlerNum - 1, removeToddler: false, addToddler: true });
        } else if (guestNum.toddlerNum > guestNumLimit.minToddlerNum && guestNum.toddlerNum <= guestNumLimit.maxToddlerNum) {
            setGuestNum({ ...guestNum, toddlerNum: guestNum.toddlerNum - 1, removeToddler: true, addToddler: true });
        }

    }

    const setTabName = (event, url) => {
        const tabName = event.target.name;
        const optionTabUrl = url;
        passTabUrl(optionTabUrl)
        props.passSelectedTab(tabName);
    };

    const handleOnMouseLeave = () => {
        props.handleOnMouseLeave();
    };

    const handleOnMouseEnter = () => {
        props.handleOnMouseEnter();
    };

    const passTabUrl = (optionTabUrl) => {
        setOptionTabUrl(optionTabUrl);
    }

    const SearchOptionGuestTab = {
        guestNum: guestNum,
        calculateGuestNum: calculateGuestNum,
        adultNum: guestNum.adultNum,
        childNum: guestNum.childNum,
        toddlerNum: guestNum.toddlerNum,
        resetGuestNum: resetGuestNum
    }

    // 숙소타입 상태
    const [innTypes, dispatch] = useReducer(innTypeCheckReducer, {
        allhouse: false,
        privateRoom: false,
        hotelRoom: false,
        publicRoom: false
    });

    const SearchOptionInnTypeTab = {
        dispatch: dispatch,
        innTypes: innTypes,
    };

    // 즉시예약 여부 상태
    const [isInstantBookChecked, setIsInstantBookChecked] = useState({ isChecked: false });

    const toggleInstantBookChecked = () => {
        setIsInstantBookChecked({ isChecked: !isInstantBookChecked.isChecked })
    }

    const SearchOptionInstantBookTab = {
        isInstantBookChecked: isInstantBookChecked,
        toggleInstantBookChecked: toggleInstantBookChecked
    }

    // 검색 옵션 탭 활성화 여부    
    const [isTabActivated, SetIsTabActivated] = useState({
        date: false,
        guest: false,
        innType: false,
        instantBook: false,
        price: false,
        time: false,
        filterAdd: false
    });

    const toggleTabOnOff = (name, isActivated) => {
        SetIsTabActivated({ ...isTabActivated, [name]: isActivated });
    }

    // All, Inn, Trip, Restaurant 탭
    const SearchTabProps = {

        isTabActivated: isTabActivated,


        passButtonClick: setTabName,
        totalNum: guestNum.totalNum,
        toddlerNum: guestNum.toddlerNum,
        innTypes: innTypes,
        match: props.match,
        passTabUrl: passTabUrl,
    };

    const SearchOptionTabProps = {
        toggleTabOnOff: toggleTabOnOff,
        optionTabUrl: optionTabUrl,
        handleOnMouseLeave: handleOnMouseLeave,
        handleOnMouseEnter: handleOnMouseEnter,
        selectedTabName: props.selectedTabName
    }

    const routerPathId = props.match.params.id;

    return (
        <div>
            <SearchTabProvider value={{ ...SearchTabProps }}> {
                (routerPathId === "all" && <AllSearchTab />) ||
                (routerPathId === "inn" && <InnSearchTab />) ||
                (routerPathId === "trip" && <TripSearchTab />) ||
                (routerPathId === "restaurant" && <RestaurantSearchTab />)
            }
            </SearchTabProvider>

            <SearchOptionPanelProvider value={{ ...SearchOptionInnTypeTab, ...SearchOptionTabProps, ...SearchOptionGuestTab, ...SearchOptionInstantBookTab }} >
                <SearchOptionPanels />
            </SearchOptionPanelProvider>
        </div>
    )
}

export default SearchTabs; 
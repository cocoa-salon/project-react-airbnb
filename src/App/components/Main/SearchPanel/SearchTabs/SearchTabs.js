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
        totalNum: 0
    });

    // const [guestNum, dispatch2] = useReducer(checkGuestNumReducer, {
    //     adultNum: 0,
    //     childNum: 0,
    //     toddlerNum: 0,
    //     totalNum: 0
    // });


    // const checkGuestNumReducer = (guestNum, {type, payload}) => {
    //     switch(type) {
    //         case 'cal' :
    //             console.log('cal');
    //         case 'reset' :
    //             console.log('reset');
    //     }
    // };

    const guestNumLimit = {
        minAdultNum: 1,
        minChildNum: 0,
        minToddlerNum: 0,
        maxAdultNum: 16,
        maxChildNum: 5,
        maxToddlerNum: 5
    };

    const [isButtonActivated, setIsButtonActivated] = useState({
        minAdult: false,
        maxAdult: true,
        minChild: false,
        maxChild: true,
        minToddler: false,
        maxToddler: true,
    });

    const resetGuestNum = (event) => {
        const name = event.target.name;
        setGuestNum({adultNum: guestNumLimit.minAdultNum, childNum: 0, toddlerNum: 0, totalNum: 1 })
        setSelectedButton(name);
    }

    const calculateGuestNum = (event) => {
        const buttonName = event.target.name;
        if (buttonName === "addAdult" || buttonName === "addChildren" || buttonName === "addToddler") increaseGuestNum(buttonName);
        else if (buttonName === "removeAdult" || buttonName === "removeChildren" || buttonName === "removeToddler") decreaseGuestNum(buttonName);
    };

    const increaseGuestNum = (buttonName) => {
        if (buttonName === "addAdult" && guestNum.adultNum < guestNumLimit.maxAdultNum) {
            setGuestNum({...guestNum, adultNum: guestNum.adultNum + 1, totalNum: guestNum.totalNum + 1});
        } if (guestNum.adultNum === 0 && buttonName !== "addAdult") {
            addEssentialAdult(buttonName);
        } if (guestNum.adultNum > 0 && buttonName === "addChildren" && guestNum.childNum < guestNumLimit.maxChildNum) {
            setGuestNum({...guestNum, childNum: guestNum.childNum + 1, totalNum: guestNum.totalNum + 1});
        } if (guestNum.adultNum > 0 && buttonName === "addToddler" && guestNum.toddlerNum < guestNumLimit.maxToddlerNum) {
            setGuestNum({...guestNum, toddlerNum: guestNum.toddlerNum + 1});
        }
        setSelectedButton(buttonName);
    };

    const addEssentialAdult = (buttonName) => {
        setGuestNum({...guestNum, adultNum: guestNum.adultNum + guestNumLimit.minAdultNum  });
        if (buttonName === "addChildren") {
            setGuestNum({...guestNum, childNum: guestNum.childNum + 1, totalNum: 2});
        } if (buttonName === "addToddler") {
            setGuestNum({...guestNum, toddlerNum: 1, totalNum: 1});
        }
    };

    const decreaseGuestNum = (buttonName) => {
        if (buttonName === "removeAdult" && guestNum.adultNum === guestNumLimit.minAdultNum) return;
        if (buttonName === "removeAdult" && guestNum.adultNum > guestNumLimit.minAdultNum) {
            setGuestNum({...guestNum, adultNum: guestNum.adultNum -1, totalNum: guestNum.totalNum - 1});
        } if (buttonName === "removeChildren" && guestNum.childNum > 0) {
            setGuestNum({...guestNum, childNum: guestNum.childNum - 1, totalNum: guestNum.totalNum - 1});
        } if (buttonName === "removeToddler" && guestNum.toddlerNum > 0) {
            setGuestNum({...guestNum, toddlerNum: guestNum.toddlerNum - 1 });
        }
        setSelectedButton(buttonName);
    }

    const switchButtonStateAdult = () => {
        if (guestNum.adultNum <= guestNumLimit.minAdultNum)
            setIsButtonActivated({ ...isButtonActivated, minAdult: false });
        else if (guestNum.adultNum >= guestNumLimit.maxAdultNum)
            setIsButtonActivated({ ...isButtonActivated, maxAdult: false });
        else if (guestNum.adultNum > guestNumLimit.minAdultNum && guestNum.adultNum < guestNumLimit.maxAdultNum)
            setIsButtonActivated({ ...isButtonActivated, minAdult: true, maxAdult: true });
    }

    const switchButtonStateChild = () => {
        if (guestNum.childNum === guestNumLimit.minChildNum)
            setIsButtonActivated({ ...isButtonActivated, minChild: false });
        else if (guestNum.childNum >= guestNumLimit.maxChildNum)
            setIsButtonActivated({ ...isButtonActivated, maxChild: false });
        else if (guestNum.childNum > guestNumLimit.minChildNum && guestNum.childNum < guestNumLimit.maxChildNum)
            setIsButtonActivated({ ...isButtonActivated, minChild: true, maxChild: true });
    }

    const switchButtonStateToddler = () => {
        if (guestNum.toddlerNum === guestNumLimit.minToddlerNum)
            setIsButtonActivated({ ...isButtonActivated, minToddler: false });
        else if (guestNum.toddlerNum >= guestNumLimit.maxToddlerNum)
            setIsButtonActivated({ ...isButtonActivated, maxToddler: false });
        else if (guestNum.toddlerNum > guestNumLimit.minToddlerNum && guestNum.toddlerNum < guestNumLimit.maxToddlerNum)
            setIsButtonActivated({ ...isButtonActivated, minToddler: true, maxToddler: true });
    }

    useEffect(() => {
        if (selectedButton === "reset")
            setIsButtonActivated({
                minAdult: false, maxAdult: true, minChild: false, maxChild: true, minToddler: false, maxToddler: true
            });
        if (selectedButton === "addAdult" || selectedButton === "removeAdult") {
            switchButtonStateAdult();
        }
        else if (selectedButton === "addChildren" || selectedButton === "removeChildren") {
            switchButtonStateChild();
        }
        else if (selectedButton === "addToddler" || selectedButton === "removeToddler") {
            switchButtonStateToddler();
        }
    }, [guestNum.adultNum, guestNum.childNum, guestNum.toddlerNum, guestNum.guestNum]);


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
        isButtonActivated: isButtonActivated,
        calculateGuestNum: calculateGuestNum,
        adultNum: guestNum.adultNum,
        childNum: guestNum.childNum,
        toddlerNum: guestNum.toddlerNum,
        resetGuestNum: resetGuestNum
    }

    // 숙소타입 state
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

    // 즉시 예약 state
    const [instantBookOnOff, setInstantBookOnOff] = useState({isOn: false, name: ''});

    const ToggleInstantBookOnOff = (name) => {
        setInstantBookOnOff({isOn : !instantBookOnOff.isOn, name: name}); 
    }

    const SearchOptionInstantBookTab = {
        // instantBookOnOff: instantBookOnOff,
        // ToggleInstantBookOnOff: ToggleInstantBookOnOff
        toggleTabOnOff : toggleTabOnOff


    };

    const [isTabActivated, SetIsTabActivated] = useState({isActivated: false, name: ''}); 

    const toggleTabOnOff = (name, checked) => {
        SetIsTabActivated({isActivated: checked, name: name})
    }


    // All, Inn, Trip, Restaurant 탭
    const SearchTabProps = {
        
        isTabActivated : isTabActivated,

        passButtonClick: setTabName,
        totalNum: guestNum.totalNum,
        toddlerNum: guestNum.toddlerNum,
        innTypes: innTypes,
        match: props.match,
        passTabUrl: passTabUrl,
    };

    const SearchOptionTabProps = {
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
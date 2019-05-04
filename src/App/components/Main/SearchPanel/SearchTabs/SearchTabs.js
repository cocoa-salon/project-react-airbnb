import React, { useState, useEffect } from 'react';

import { AllSearchTab } from './AllSearchTab';
import { InnSearchTab } from './InnSearchTab';
import { RestaurantSearchTab } from './RestaurantSearchTab';
import { TripSearchTab } from './TripSearchTab';

import { SearchOptionPanels } from './SearchOptionPanels/SearchOptionPanels';

const SearchOptionPanelContext = React.createContext();
const { Provider: SearchOptionPanelProvider, Consumer: SearchOptionPanelConsumer } = SearchOptionPanelContext;

const SearchTabContext = React.createContext();
const { Provider: SearchTabProvider, Consumer: SearchTabConsumer } = SearchTabContext;


function SearchTabs(props) {
    const [optionTabUrl, setOptionTabUrl] = useState('');
    const [selectedButton, setSelectedButton] = useState(0);
    const [selectedTabName, setSelectedTabName] = useState('none');
    const [adultNum, setAdultNum] = useState(0);
    const [childNum, setChildNum] = useState(0);
    const [toddlerNum, setToddlerNum] = useState(0);
    const [guestNum, setGuestNum] = useState(0);

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
        setAdultNum(guestNumLimit.minAdultNum);
        setChildNum(0);
        setToddlerNum(0);
        setGuestNum(1);
        setSelectedButton(name);
    }

    const calculateGuestNum = (event) => {
        const buttonName = event.target.name;
        if (buttonName === "addAdult" || buttonName === "addChildren" || buttonName === "addToddler") increaseGuestNum(buttonName);
        else if (buttonName === "removeAdult" || buttonName === "removeChildren" || buttonName === "removeToddler") decreaseGuestNum(buttonName);
    };

    const increaseGuestNum = (buttonName) => {
        if (buttonName === "addAdult" && adultNum < guestNumLimit.maxAdultNum) {
            setAdultNum(adultNum + 1);
            setGuestNum(guestNum + 1);
        } if (adultNum === 0 && buttonName !== "addAdult") {
            addEssentialAdult(buttonName);
        } if (adultNum > 0 && buttonName === "addChildren" && childNum < guestNumLimit.maxChildNum) {
            setChildNum(childNum + 1);
            setGuestNum(guestNum + 1)
        } if (adultNum > 0 && buttonName === "addToddler" && toddlerNum < guestNumLimit.maxToddlerNum) {
            setToddlerNum(toddlerNum + 1);
        }
        setSelectedButton(buttonName);
    };

    const addEssentialAdult = (buttonName) => {
        setAdultNum(adultNum + guestNumLimit.minAdultNum);
        if (buttonName === "addChildren") {
            setChildNum(childNum + 1);
            setGuestNum(2)
        } if (buttonName === "addToddler") {
            setToddlerNum(1);
            setGuestNum(1)
        }
    };

    const decreaseGuestNum = (buttonName) => {
        if (buttonName === "removeAdult" && adultNum === guestNumLimit.minAdultNum) return;
        if (buttonName === "removeAdult" && adultNum > guestNumLimit.minAdultNum) {
            setAdultNum(adultNum - 1);
            setGuestNum(guestNum - 1);
        } if (buttonName === "removeChildren" && childNum > 0) {
            setChildNum(childNum - 1);
            setGuestNum(guestNum - 1);
        } if (buttonName === "removeToddler" && toddlerNum > 0) {
            setToddlerNum(toddlerNum - 1);
        }
        setSelectedButton(buttonName);
    }

    const switchButtonStateAdult = () => {
        if (adultNum <= guestNumLimit.minAdultNum)
            setIsButtonActivated({ ...isButtonActivated, minAdult: false });
        else if (adultNum >= guestNumLimit.maxAdultNum)
            setIsButtonActivated({ ...isButtonActivated, maxAdult: false });
        else if (adultNum > guestNumLimit.minAdultNum && adultNum < guestNumLimit.maxAdultNum)
            setIsButtonActivated({ ...isButtonActivated, minAdult: true, maxAdult: true });
    }

    const switchButtonStateChild = () => {
        if (childNum === guestNumLimit.minChildNum)
            setIsButtonActivated({ ...isButtonActivated, minChild: false });
        else if (childNum >= guestNumLimit.maxChildNum)
            setIsButtonActivated({ ...isButtonActivated, maxChild: false });
        else if (childNum > guestNumLimit.minChildNum && childNum < guestNumLimit.maxChildNum)
            setIsButtonActivated({ ...isButtonActivated, minChild: true, maxChild: true });
    }

    const switchButtonStateToddler = () => {
        if (toddlerNum === guestNumLimit.minToddlerNum)
            setIsButtonActivated({ ...isButtonActivated, minToddler: false });
        else if (toddlerNum >= guestNumLimit.maxToddlerNum)
            setIsButtonActivated({ ...isButtonActivated, maxToddler: false });
        else if (toddlerNum > guestNumLimit.minToddlerNum && toddlerNum < guestNumLimit.maxToddlerNum)
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
    }, [adultNum, childNum, toddlerNum, guestNum]);


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
        adultNum: adultNum,
        childNum: childNum,
        toddlerNum: toddlerNum,
        resetGuestNum: resetGuestNum
    }

    // InnType 탭
    const [innTypes, setInnTypesChecked] = useState({
        allhouse: false,
        privateRoom: false,
        hotelRoom: false,
        publicRoom: false
    });

    const handleInputChange = (event) => {
        const name = event.target.name;
        const isChecked = event.target.checked;
        setInnTypesChecked({ ...innTypes, [name]: isChecked });
    }

    const resetInnTypeCheck = () => {
        setInnTypesChecked({
            allhouse: false,
            privateRoom: false,
            hotelRoom: false,
            publicRoom: false
        })
    }

    const SearchOptionInnTypeTab = {
        handleInputChange: handleInputChange,
        innTypes: innTypes,
        resetInnTypeCheck: resetInnTypeCheck
    }

    // All, Inn, Trip, Restaurant 탭
    const SearchTabProps = {
        passButtonClick: setTabName,
        guestNum: guestNum,
        toddlerNum: toddlerNum,
        innTypes: innTypes,
        match: props.match,
        passTabUrl: passTabUrl,
        testText: 'banana'
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
            <SearchTabProvider value={{...SearchTabProps}}> {
                (routerPathId === "all" && <AllSearchTab />) ||
                (routerPathId === "inn" && <InnSearchTab />) ||
                (routerPathId === "trip" && <TripSearchTab />) ||
                (routerPathId === "restaurant" && <RestaurantSearchTab />)
            }
            </SearchTabProvider>

            <SearchOptionPanelProvider value={{ ...SearchOptionInnTypeTab, ...SearchOptionTabProps, ...SearchOptionGuestTab }} >
                <SearchOptionPanels />
            </SearchOptionPanelProvider>
        </div>
    )
}

export { SearchTabs };
export { SearchTabConsumer };
export { SearchOptionPanelConsumer };

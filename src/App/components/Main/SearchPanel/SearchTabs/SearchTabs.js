import React, { useState, useEffect } from 'react';

import { AllSearchTab } from './AllSearchTab';
import { InnSearchTab } from './InnSearchTab';
import { RestaurantSearchTab } from './RestaurantSearchTab';
import { TripSearchTab } from './TripSearchTab';


import { SearchOptionTabs } from './SearchOptionTabs/SearchOptionTabs';

function SearchTabs(props) {
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

    const [optionTabUrl, setOptionTabUrl] = useState('');

    const resetGuestNum = (name) => {
        setAdultNum(guestNumLimit.minAdultNum);
        setChildNum(0);
        setToddlerNum(0);
        setGuestNum(1);
        setSelectedButton(name);
    }

    const calculateGuestNum = (buttonName) => {
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
        console.log('called!')
        if (selectedButton === "reset") setIsButtonActivated({
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


    const setTabName = (event) => {
        const tabName = event.target.name;
        setSelectedTabName(tabName);
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

    const SearchTabProps = {
        guestNum: guestNum,
        toddlerNum: toddlerNum,
        passButtonClick: setTabName,
        match: props.match,
        passTabUrl: passTabUrl
    };

    const SearchOptionGuestTab = {
        isButtonActivated: isButtonActivated,
        calculateGuestNum: calculateGuestNum,
        adultNum: adultNum,
        childNum: childNum,
        toddlerNum: toddlerNum,
        resetGuestNum: resetGuestNum
    }

    return (
        <div>
            {props.match.params.id === "all" ? <AllSearchTab {...SearchTabProps} /> :
                props.match.params.id === "inn" ? <InnSearchTab {...SearchTabProps} /> :
                    props.match.params.id === "trip" ? <TripSearchTab {...SearchTabProps} /> :
                        props.match.params.id === "restaurant" ? <RestaurantSearchTab {...SearchTabProps} /> : null
            }
            <SearchOptionTabs {...SearchOptionGuestTab} optionTabUrl={optionTabUrl} handleOnMouseLeave={handleOnMouseLeave} handleOnMouseEnter={handleOnMouseEnter} selectedTabName={props.selectedTabName} />
        </div>
    )
}

export { SearchTabs };
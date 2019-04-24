import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { AllSearchTab } from './SearchTabs/AllSearchTab';
import { InnSearchTab } from './SearchTabs/InnSearchTab';
import { RestaurantSearchTab } from './SearchTabs/RestaurantSearchTab';
import { TripSearchTab } from './SearchTabs/TripSearchTab';

import { Calendar } from './SearchTabs/SearchOptions/Calendar'
import { Guest } from './SearchTabs/SearchOptions/Guest'
import { InnType } from './SearchTabs/SearchOptions/InnType'
import { InstantBook } from './SearchTabs/SearchOptions/InstantBook'
import { Price } from './SearchTabs/SearchOptions/Price'
import { Time } from './SearchTabs/SearchOptions/Time'
import { AddFilters } from './SearchTabs/SearchOptions/AddFilters'

function SearchPanel(props) {

    const handleOnMouseLeave = () => {
        props.handleOnMouseLeave();
    }

    const handleOnMouseEnter = () => {
        props.handleOnMouseEnter();
    }

    const passSelectedButton = (name) => {
        props.passSelectedButton(name)
    }

    return (
        <StyledDiv>
            <h3>this is search panel area</h3>
            <Route path="/search/:id" render={({ match }) => (
                <SearchTabs
                    handleOnMouseLeave={handleOnMouseLeave}
                    handleOnMouseEnter={handleOnMouseEnter}
                    passSelectedButton={passSelectedButton}
                    selectedButton={props.selectedButton}
                    match={match}
                />
            )} />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    position: relative; 
    width: 100%;
    height: 150px;
    border: 2px solid grey;
    background: #CADBE9; 
`

function SearchTabs(props) {
    const [selectedButton, setSelectedButton] = useState(0);
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
    const [isButtonDisabled, SetIsButtonDisabled] = useState({
        minAdult: false,
        maxAdult: true,
        minChild: false,
        maxChild: true,
        minToddler: false,
        maxToddler: true,
    });

    const [target, setTarget] = useState('');

    const calculateGuestNum = (name) => {
        if (name === "addAdult" || name === "addChildren" || name === "addToddler") increaseGuestNum(name);
        else if (name === "removeAdult" || name === "removeChildren" || name === "removeToddler") decreaseGuestNum(name);
    };

    const increaseGuestNum = (name) => {
        if (name === "addAdult" && adultNum < guestNumLimit.maxAdultNum) {
            setAdultNum(adultNum + 1);
            setGuestNum(guestNum + 1);
        } if (adultNum === 0 && name !== "addAdult") {
            addEssentialAdult(name);
        } if (adultNum > 0 && name === "addChildren" && childNum < guestNumLimit.maxChildNum) {
            setChildNum(childNum + 1);
            setGuestNum(guestNum + 1)
        } if (adultNum > 0 && name === "addToddler" && toddlerNum < guestNumLimit.maxToddlerNum) {
            setToddlerNum(toddlerNum + 1);
        }
        setTarget(name);
    };

    const addEssentialAdult = (name) => {
        setAdultNum(adultNum + guestNumLimit.minAdultNum);
        if (name === "addChildren") {
            setChildNum(childNum + 1);
            setGuestNum(2)
        } if (name === "addToddler") {
            setToddlerNum(1);
            setGuestNum(1)
        }
    };

    const decreaseGuestNum = (name) => {
        if (name === "removeAdult" && adultNum === guestNumLimit.minAdultNum) return;
        if (name === "removeAdult" && adultNum > guestNumLimit.minAdultNum) {
            setAdultNum(adultNum - 1);
            setGuestNum(guestNum - 1);
        } if (name === "removeChildren" && childNum > 0) {
            setChildNum(childNum - 1);
            setGuestNum(guestNum - 1);
        } if (name === "removeToddler" && toddlerNum > 0) {
            setToddlerNum(toddlerNum - 1);
        }
        setTarget(name);

    }

    const disableButtonStyleAdult = () => {
        if (adultNum <= guestNumLimit.minAdultNum) SetIsButtonDisabled({ ...isButtonDisabled, minAdult: false });
        else if (adultNum >= guestNumLimit.maxAdultNum) SetIsButtonDisabled({ ...isButtonDisabled, maxAdult: false });
        else if (adultNum > guestNumLimit.minAdultNum && adultNum < guestNumLimit.maxAdultNum) SetIsButtonDisabled({ ...isButtonDisabled, minAdult: true, maxAdult: true });
    }

    const disableButtonStyleChild = () => {
        if (childNum === guestNumLimit.minChildNum) SetIsButtonDisabled({ ...isButtonDisabled, minChild: false });
        else if (childNum >= guestNumLimit.maxChildNum) SetIsButtonDisabled({ ...isButtonDisabled, maxChild: false });
        else if (childNum > guestNumLimit.minChildNum && childNum < guestNumLimit.maxChildNum) SetIsButtonDisabled({ ...isButtonDisabled, minChild: true, maxChild: true });
    }

    const disableButtonStyleToddler = () => {
        if (toddlerNum === guestNumLimit.minToddlerNum) SetIsButtonDisabled({ ...isButtonDisabled, minToddler: false });
        else if (toddlerNum >= guestNumLimit.maxToddlerNum) SetIsButtonDisabled({ ...isButtonDisabled, maxToddler: false });
        else if (toddlerNum > guestNumLimit.minToddlerNum && toddlerNum < guestNumLimit.maxToddlerNum) SetIsButtonDisabled({ ...isButtonDisabled, minToddler: true, maxToddler: true });
    }

    useEffect(() => {
        if (target === "addAdult" || target === "removeAdult") { disableButtonStyleAdult(); console.log("what?") }
        else if (target === "addChildren" || target === "removeChildren") { disableButtonStyleChild(); console.log("what?"); }
        else if (target === "addToddler" || target === "removeToddler") { disableButtonStyleToddler(); console.log("what?"); }
    }, [adultNum, childNum, toddlerNum, guestNum]);


    const setButtonName = (event) => {
        const name = event.target.name
        setSelectedButton(name);
        props.passSelectedButton(name);
    };

    const handleOnMouseLeave = () => {
        props.handleOnMouseLeave();
    };

    const handleOnMouseEnter = () => {
        props.handleOnMouseEnter();
    };

    const SearchOptionPanel = ({ ...rest }) => {
        switch (props.selectedButton) {
            case "date":
                return <Calendar {...rest} />;
            case "guest":
                return <Guest {...rest} isButtonDisabled={isButtonDisabled} calculateGuestNum={calculateGuestNum} adultNum={adultNum} childNum={childNum} toddlerNum={toddlerNum} />;
            case "innType":
                return <InnType {...rest} />;
            case "instantBook":
                return <InstantBook {...rest} />;
            case "price":
                return <Price {...rest} />;
            case "time":
                return <Time {...rest} />;
            case "filterAdd":
                return <AddFilters {...rest} />;
            case "none":
                return null;
        }
    };

    const SearchTabProps = { guestNum: guestNum, toddlerNum: toddlerNum, passButtonClick: setButtonName };

    return (
        <div>
            {props.match.params.id === "all" ? <AllSearchTab {...SearchTabProps} /> :
                props.match.params.id === "inn" ? <InnSearchTab {...SearchTabProps} /> :
                    props.match.params.id === "trip" ? <TripSearchTab {...SearchTabProps} /> :
                        props.match.params.id === "restaurant" ? <RestaurantSearchTab {...SearchTabProps} /> : null
            }
            <SearchOptionPanel handleOnMouseLeave={handleOnMouseLeave} handleOnMouseEnter={handleOnMouseEnter} />
        </div>
    )
}

export { SearchPanel };
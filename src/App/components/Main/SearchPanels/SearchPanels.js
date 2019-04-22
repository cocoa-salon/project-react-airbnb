import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
    const [selectedButton, setSelectedButton] = useState(props.selectedButton);

    const setButtonName = (event) => {
        const name = event.target.name
        setSelectedButton(name);
        props.passSelectedButton(name);
    }

    const handleOnMouseLeave = () => {
        props.handleOnMouseLeave();
    }

    const handleOnMouseEnter = () => {
        props.handleOnMouseEnter();
    }

    const SearchOptionPanel = ({ ...rest }) => {
        switch (props.selectedButton) {
            case "date":
                return <Calendar {...rest} />;
            case "guest":
                return <Guest {...rest} />;
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
    }

    return (
        <div>
            {props.match.params.id === "all" ? <AllSearchTab passButtonClick={setButtonName} /> :
                props.match.params.id === "inn" ? <InnSearchTab passButtonClick={setButtonName} /> :
                    props.match.params.id === "trip" ? <TripSearchTab passButtonClick={setButtonName} /> :
                        props.match.params.id === "restaurant" ? <RestaurantSearchTab passButtonClick={setButtonName} /> : null
            }
            <SearchOptionPanel handleOnMouseLeave={handleOnMouseLeave} handleOnMouseEnter={handleOnMouseEnter} />
        </div>
    )
}

export { SearchPanel };
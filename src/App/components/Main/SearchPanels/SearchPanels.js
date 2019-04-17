import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { AllSearchOption } from './SearchOptions/AllSearchOption';
import { InnSearchOption } from './SearchOptions/InnSearchOption';
import { RestaurantSearchOption } from './SearchOptions/RestaurantSearchOption';
import { TripSearchOption } from './SearchOptions/TripSearchOption';

function SearchPanel({ match }) {
    return (
        <StyledDiv>
            <h3>this is search panel area</h3>
            <Route path="/all" component={SearchOptions} />
            <Route path="/inn" component={SearchOptions} />
            <Route path="/trip" component={SearchOptions} />
            <Route path="/restaurant" component={SearchOptions} />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    width: 100%;
    height: 150px;
    border: 2px solid grey;
    background: #CADBE9; 
`

function SearchOptions({ match }) {
    return (
        <div>
            {match.path === "/all" ? <AllSearchOption/ > :
                match.path === "/inn" ? <InnSearchOption /> :
                    match.path === "/trip" ? <TripSearchOption /> :
                        match.path === "/restaurant" ? <RestaurantSearchOption /> : null
            }
        </div>
    )
}

export { SearchPanel };
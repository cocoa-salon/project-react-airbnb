import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import SearchTabs from './SearchTabs/SearchTabs';

function SearchPanel(props) {

    const handleOnMouseLeave = () => {
        props.handleOnMouseLeave();
    }

    const handleOnMouseEnter = () => {
        props.handleOnMouseEnter();
    }

    const passSelectedTab = (tabName) => {
        props.passSelectedTab(tabName)
    }

    return (
        <StyledDiv>
            <h3>this is search panel area</h3>
            <Route path="/search/:id" render={({ match }) => (
                <SearchTabs
                    handleOnMouseLeave={handleOnMouseLeave}
                    handleOnMouseEnter={handleOnMouseEnter}
                    passSelectedTab={passSelectedTab}
                    selectedTabName={props.selectedTabName}
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
export { SearchPanel };
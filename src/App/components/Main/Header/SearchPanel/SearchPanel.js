import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import SearchTabs from './SearchTabs/SearchTabs';

function SearchPanel(props) {

    return (
        <SearchPanleDiv>
            <Route path="/search/:id" render={({ match }) => (
                <SearchTabs
                    match={match}
                />
            )} />
        </SearchPanleDiv>
    )
}

const SearchPanleDiv = styled.div`
    padding: 1rem; 
    position: relative; 
    width: 100%;
    height: 36px;
    border: 1px solid rgb(230,230,230);
    background: white; 
`
export default SearchPanel;
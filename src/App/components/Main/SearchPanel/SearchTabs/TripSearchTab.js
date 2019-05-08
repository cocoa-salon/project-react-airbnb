import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchOptionTabs } from './SearchOptionTabs/SearchOptionTabs';

function TripSearchTab(props) {

    return (
        <SearchTabStyle>
            <h4>TripSearchPanel</h4>
            <SearchOptionTabs type='date' />
            <SearchOptionTabs type='guest' />
            <SearchOptionTabs type='price' />
            <SearchOptionTabs type='time' />
        </SearchTabStyle>
    )
}
export { TripSearchTab };
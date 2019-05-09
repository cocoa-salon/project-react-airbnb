import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchOptionTabs } from './SearchOptionTabs/SearchOptionTabs';

function TripSearchTab(props) {

    return (
        <SearchTabStyle>
            <SearchOptionTabs type='date' />
            <SearchOptionTabs type='guest' />
            <SearchOptionTabs type='price' />
            <SearchOptionTabs type='time' />
        </SearchTabStyle>
    )
}
export { TripSearchTab };
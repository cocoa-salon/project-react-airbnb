import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchOptionTabs } from './SearchOptionTabs/SearchOptionTabs';

function InnSearchTab(props) {
    
    return (
        <SearchTabStyle>
            <h4>InnSearchPanel</h4>
            <SearchOptionTabs  type='date' />
            <SearchOptionTabs  type='guest' />
            <SearchOptionTabs  type='innType' />
            <SearchOptionTabs  type='price' />
            <SearchOptionTabs  type='instantBook' />
            <SearchOptionTabs  type='filterAdd' />
        </SearchTabStyle>
    )
}

export { InnSearchTab };
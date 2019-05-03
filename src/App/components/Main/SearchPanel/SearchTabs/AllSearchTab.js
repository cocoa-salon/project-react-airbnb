import React from 'react';

import { SearchTabStyle } from './SearchTabStyle';
import { SearchOptionTabs } from './SearchOptionTabs/SearchOptionTabs';

function AllSearchTab(props) {

    return (
        <SearchTabStyle >
            <h4>AllSearchPanel</h4>
            <SearchOptionTabs type='date' />
            <SearchOptionTabs type='guest' />
        </SearchTabStyle>
    )
}

export { AllSearchTab };
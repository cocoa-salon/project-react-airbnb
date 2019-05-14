import React from 'react';

import { SearchTabStyle } from './SearchTabStyle';
import { SearchOptionTabs } from './SearchOptionTabs/SearchOptionTabs';

function AllSearchTab(props) {

    return (
        <SearchTabStyle >
            <SearchOptionTabs type='date' />
            <SearchOptionTabs type='guest' />
        </SearchTabStyle>
    )
}

export { AllSearchTab };
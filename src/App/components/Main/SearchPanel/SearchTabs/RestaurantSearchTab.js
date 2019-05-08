import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchOptionTabs } from './SearchOptionTabs/SearchOptionTabs';

function RestaurantSearchTab(props) {

    return (
        <SearchTabStyle>
            <h4>RestaurantSearchPanel</h4>
            <SearchOptionTabs type='date' />
            <SearchOptionTabs type='guest' />
        </SearchTabStyle>
    )
}

export { RestaurantSearchTab };
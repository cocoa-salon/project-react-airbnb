import React from 'react';

import SearchTabStyle from './SearchTabStyle'
import SearchOptionTabs from './SearchOptionTabs/SearchOptionTabs';

function RestaurantSearchTab(props) {

    return (
        <SearchTabStyle>
            <SearchOptionTabs type='dates' />
            <SearchOptionTabs type='guests' />
        </SearchTabStyle>
    );
};

export default RestaurantSearchTab;
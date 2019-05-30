import React from 'react';

import SearchTabStyle from './SearchTabStyle'
import SearchOptionTabs from './SearchOptionTabs/SearchOptionTabs';

function StaysSearchTab(props) {
    
    return (
        <SearchTabStyle>
            <SearchOptionTabs  type='dates' />
            <SearchOptionTabs  type='guests' />
            <SearchOptionTabs  type='typeOfPlace' />
            <SearchOptionTabs  type='price' />
            <SearchOptionTabs  type='instantBook' />
            <SearchOptionTabs  type='morefilters' />
        </SearchTabStyle>
    );
};

export default StaysSearchTab;
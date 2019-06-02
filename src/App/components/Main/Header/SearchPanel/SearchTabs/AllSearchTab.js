import React from 'react';

import SearchTabStyle from './SearchTabStyle';
import SearchOptionTabs from './SearchOptionTabs/SearchOptionTabs';

function AllSearchTab(props) {

    return (
        <SearchTabStyle >
            <SearchOptionTabs type='dates' />
            <SearchOptionTabs type='guests' />
        </SearchTabStyle>
    );
};

export default AllSearchTab;
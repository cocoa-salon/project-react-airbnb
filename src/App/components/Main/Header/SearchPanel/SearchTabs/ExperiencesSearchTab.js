import React from 'react';

import SearchTabStyle from './SearchTabStyle'
import SearchOptionTabs from './SearchOptionTabs/SearchOptionTabs';

function ExperiencesSearchTab(props) {

    return (
        <SearchTabStyle>
            <SearchOptionTabs type='dates' />
            <SearchOptionTabs type='guests' />
            <SearchOptionTabs type='price' />
            <SearchOptionTabs type='time' />
        </SearchTabStyle>
    )
}
export default ExperiencesSearchTab;
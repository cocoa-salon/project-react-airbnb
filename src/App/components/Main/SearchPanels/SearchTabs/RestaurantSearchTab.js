import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchOptionTabs } from './SearchOptions/SearchOptionTabs'
const { DateSetTab, GuestSetTab } = SearchOptionTabs;

function RestaurantSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event); 
    const GuestSetTabProps = { guestNum : props.guestNum, toddlerNum: props.toddlerNum}
    return (
        <SearchTabStyle>
            <h4>RestaurantSearchPanel</h4>
            <DateSetTab passButtonClick={passButtonClick} />
            <GuestSetTab passButtonClick={passButtonClick} {...GuestSetTabProps} />
        </SearchTabStyle>
    )
}

export { RestaurantSearchTab };
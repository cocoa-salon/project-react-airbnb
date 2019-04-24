import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchTabs } from './SearchOptions/SearchTabs'
const { DateSetTab, GuestSetTab } = SearchTabs;

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
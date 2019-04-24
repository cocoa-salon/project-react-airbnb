import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchTabs } from './SearchOptions/SearchTabs'
const { DateSetTab, GuestSetTab, PriceSetTab, TimeSetTab  } = SearchTabs;

function TripSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event); 
    const GuestSetTabProps = { guestNum : props.guestNum, toddlerNum: props.toddlerNum}
    return (
        <SearchTabStyle>
            <h4>TripSearchPanel</h4>
            <DateSetTab passButtonClick={passButtonClick} />
            <GuestSetTab passButtonClick={passButtonClick} {...GuestSetTabProps} />
            <PriceSetTab passButtonClick={passButtonClick} />
            <TimeSetTab passButtonClick={passButtonClick} />
        </SearchTabStyle>
    )
}
export { TripSearchTab };
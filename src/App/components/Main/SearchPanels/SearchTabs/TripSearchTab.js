import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchOptionTabs } from './SearchOptions/SearchOptionTabs'
const { DateSetTab, GuestSetTab, PriceSetTab, TimeSetTab  } = SearchOptionTabs;

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
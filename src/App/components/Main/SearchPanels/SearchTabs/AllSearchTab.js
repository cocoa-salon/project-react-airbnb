import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchTabs } from './SearchOptions/SearchTabs'
const { DateSetTab, GuestSetTab } = SearchTabs;


function AllSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event); 
    const GuestSetTabProps = { guestNum : props.guestNum, toddlerNum: props.toddlerNum}
    return (
        <SearchTabStyle >
            <h4>AllSearchPanel</h4>
            <DateSetTab passButtonClick={passButtonClick}  />
            <GuestSetTab passButtonClick={passButtonClick} {...GuestSetTabProps}/>
        </SearchTabStyle>
    )
}

export { AllSearchTab };
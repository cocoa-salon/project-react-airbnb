import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchOptionTabs } from './SearchOptions/SearchOptionTabs'
const { DateSetTab, GuestSetTab } = SearchOptionTabs;


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
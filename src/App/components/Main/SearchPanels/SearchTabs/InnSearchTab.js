import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchOptionTabs } from './SearchOptions/SearchOptionTabs'
const { DateSetTab, GuestSetTab, InnTypeSetTab, PriceSetTab, InstantBookSetTab, FilterAddTab } = SearchOptionTabs;

function InnSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event); 
    const GuestSetTabProps = { guestNum : props.guestNum, toddlerNum: props.toddlerNum}

    return (
        <SearchTabStyle>
            <h4>InnSearchPanel</h4>
            <DateSetTab passButtonClick={passButtonClick} />
            <GuestSetTab passButtonClick={passButtonClick} {...GuestSetTabProps} />
            <InnTypeSetTab passButtonClick={passButtonClick} />
            <PriceSetTab passButtonClick={passButtonClick} />
            <InstantBookSetTab passButtonClick={passButtonClick} />
            <FilterAddTab passButtonClick={passButtonClick} />
        </SearchTabStyle>
    )
}

export { InnSearchTab };
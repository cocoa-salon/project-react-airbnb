import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchOptionTabs } from './SearchOptionTabs/SearchOptionTabs'
const { DateSetTab, GuestSetTab } = SearchOptionTabs;

function RestaurantSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event); 
    const passTabUrl = (optionTabUrl) => props.passTabUrl(optionTabUrl);
    const guestSetTabProps = { guestNum : props.guestNum, toddlerNum: props.toddlerNum}
    const passInfo = { match: props.match, passTabUrl: passTabUrl, passButtonClick: passButtonClick }

    return (
        <SearchTabStyle>
            <h4>RestaurantSearchPanel</h4>
            <DateSetTab {...passInfo} />
            <GuestSetTab {...passInfo} {...guestSetTabProps} />
        </SearchTabStyle>
    )
}

export { RestaurantSearchTab };
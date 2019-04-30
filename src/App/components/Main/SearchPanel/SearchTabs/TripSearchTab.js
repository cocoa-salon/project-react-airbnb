import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchOptionTabs } from './SearchOptionTabs/SearchOptionTabs';

function TripSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event);
    const passTabUrl = (optionTabUrl) => props.passTabUrl(optionTabUrl);
    const guestSetTabProps = { guestNum: props.guestNum, toddlerNum: props.toddlerNum, match: props.match, passTabUrl: passTabUrl }
    const passInfo = { match: props.match, passTabUrl: passTabUrl, passButtonClick: passButtonClick }

    return (
        <SearchTabStyle>
            <h4>TripSearchPanel</h4>
            <SearchOptionTabs {...passInfo} type='date' />
            <SearchOptionTabs {...passInfo} {...guestSetTabProps} type='guest' />
            <SearchOptionTabs {...passInfo} type='price' />
            <SearchOptionTabs {...passInfo} type='time' />
        </SearchTabStyle>
    )
}
export { TripSearchTab };
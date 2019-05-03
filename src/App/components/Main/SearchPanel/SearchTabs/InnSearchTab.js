import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchOptionTabs } from './SearchOptionTabs/SearchOptionTabs';

function InnSearchTab(props) {
    // const passButtonClick = event => props.passButtonClick(event);
    // const passTabUrl = (optionTabUrl) => props.passTabUrl(optionTabUrl);
    // const guestSetTabProps = { guestNum: props.guestNum, toddlerNum: props.toddlerNum }
    // const InnTypeSetTabProps = { innTypes : props.innTypes } 
    // const passInfo = { match: props.match, passTabUrl: passTabUrl, passButtonClick: passButtonClick }

    return (
        <SearchTabStyle>
            <h4>InnSearchPanel</h4>
            <SearchOptionTabs  type='date' />
            <SearchOptionTabs  type='guest' />
            <SearchOptionTabs  type='innType' />
            <SearchOptionTabs  type='price' />
            <SearchOptionTabs  type='instantBook' />
            <SearchOptionTabs  type='filterAdd' />
        </SearchTabStyle>
    )
}

export { InnSearchTab };
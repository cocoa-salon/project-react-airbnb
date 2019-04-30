import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchOptionTabs } from './SearchOptionTabs/SearchOptionTabs';

function InnSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event);
    const passTabUrl = (optionTabUrl) => props.passTabUrl(optionTabUrl);
    const guestSetTabProps = { guestNum: props.guestNum, toddlerNum: props.toddlerNum }
    const InnTypeSetTabProps = { innTypes : props.innTypes } 
    const passInfo = { match: props.match, passTabUrl: passTabUrl, passButtonClick: passButtonClick }

    return (
        <SearchTabStyle>
            <h4>InnSearchPanel</h4>
            <SearchOptionTabs {...passInfo} type='date' />
            <SearchOptionTabs {...passInfo} {...guestSetTabProps} type='guest' />
            <SearchOptionTabs {...passInfo} {...InnTypeSetTabProps} type='innType' />
            <SearchOptionTabs {...passInfo} type='price' />
            <SearchOptionTabs {...passInfo} type='instantBook' />
            <SearchOptionTabs {...passInfo} type='filterAdd' />
        </SearchTabStyle>
    )
}

export { InnSearchTab };
import React from 'react';

import { SearchTabStyle } from './SearchTabStyle';
import { SearchOptionTabs } from './SearchOptionTabs/SearchOptionTabs';

function AllSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event);
    const passTabUrl = (optionTabUrl) => props.passTabUrl(optionTabUrl);
    const guestSetTabProps = { guestNum: props.guestNum, toddlerNum: props.toddlerNum };
    const passInfo = { match: props.match, passTabUrl: passTabUrl, passButtonClick: passButtonClick }

    return (
        <SearchTabStyle >
            <h4>AllSearchPanel</h4>
            <SearchOptionTabs {...passInfo} type='date' />
            <SearchOptionTabs {...passInfo} {...guestSetTabProps} type='guest' />
        </SearchTabStyle>
    )
}

export { AllSearchTab };
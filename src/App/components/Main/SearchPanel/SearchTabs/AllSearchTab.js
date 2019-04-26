import React from 'react';

import { SearchTabStyle } from './SearchTabStyle';
import { OptionTabButtons } from './SearchOptionTabs/OptionTabs/OptionTabButtons/OptionTabButtons';

const { DateSetTab, GuestSetTab } = OptionTabButtons;


function AllSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event);
    const passTabUrl = (optionTabUrl) => props.passTabUrl(optionTabUrl);
    const guestSetTabProps = { guestNum: props.guestNum, toddlerNum: props.toddlerNum }
    const passInfo = { match: props.match, passTabUrl: passTabUrl, passButtonClick: passButtonClick }

    return (
        <SearchTabStyle >
            <h4>AllSearchPanel</h4>
            <DateSetTab {...passInfo} />
            <GuestSetTab {...passInfo} {...guestSetTabProps} />
        </SearchTabStyle>
    )
}

export { AllSearchTab };
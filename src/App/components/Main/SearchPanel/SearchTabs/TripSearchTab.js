import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { OptionTabButtons } from './SearchOptionTabs/OptionTabs/OptionTabButtons/OptionTabButtons';
const { DateSetTab, GuestSetTab, PriceSetTab, TimeSetTab } = OptionTabButtons;

function TripSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event);
    const passTabUrl = (optionTabUrl) => props.passTabUrl(optionTabUrl);
    const guestSetTabProps = { guestNum: props.guestNum, toddlerNum: props.toddlerNum, match: props.match, passTabUrl: passTabUrl }
    const passInfo = { match: props.match, passTabUrl: passTabUrl, passButtonClick: passButtonClick }

    return (
        <SearchTabStyle>
            <h4>TripSearchPanel</h4>
            <DateSetTab {...passInfo} />
            <GuestSetTab {...passInfo} {...guestSetTabProps} />
            <PriceSetTab {...passInfo} />
            <TimeSetTab {...passInfo} />
        </SearchTabStyle>
    )
}
export { TripSearchTab };
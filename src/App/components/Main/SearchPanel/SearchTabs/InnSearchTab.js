import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { OptionTabButtons } from './SearchOptionTabs/OptionTabs/OptionTabButtons/OptionTabButtons';
const { DateSetTab, GuestSetTab, InnTypeSetTab, PriceSetTab, InstantBookSetTab, FilterAddTab } = OptionTabButtons;

function InnSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event);
    const passTabUrl = (optionTabUrl) => props.passTabUrl(optionTabUrl);
    const guestSetTabProps = { guestNum: props.guestNum, toddlerNum: props.toddlerNum }
    const passInfo = { match: props.match, passTabUrl: passTabUrl, passButtonClick: passButtonClick }

    return (
        <SearchTabStyle>
            <h4>InnSearchPanel</h4>
            <DateSetTab {...passInfo} />
            <GuestSetTab {...passInfo} {...guestSetTabProps} />
            <InnTypeSetTab {...passInfo} />
            <PriceSetTab {...passInfo} />
            <InstantBookSetTab {...passInfo} />
            <FilterAddTab {...passInfo} />
        </SearchTabStyle>
    )
}

export { InnSearchTab };
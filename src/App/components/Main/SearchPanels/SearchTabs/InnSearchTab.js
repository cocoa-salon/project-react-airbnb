import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchTabButtons } from './SearchOptions/SearchTabButtons'
const { DateSetButton, GuestSetNumButton, InnTypeSetButton, PriceSetButton, InstantBookSetButton, FilterAddButton } = SearchTabButtons;

function InnSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event); 
    const GuestSetNumButtonProps = { guestNum : props.guestNum, toddlerNum: props.toddlerNum}

    return (
        <SearchTabStyle>
            <h4>InnSearchPanel</h4>
            <DateSetButton passButtonClick={passButtonClick} />
            <GuestSetNumButton passButtonClick={passButtonClick} {...GuestSetNumButtonProps} />
            <InnTypeSetButton passButtonClick={passButtonClick} />
            <PriceSetButton passButtonClick={passButtonClick} />
            <InstantBookSetButton passButtonClick={passButtonClick} />
            <FilterAddButton passButtonClick={passButtonClick} />
        </SearchTabStyle>
    )
}

export { InnSearchTab };
import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchTabButtons } from './SearchOptions/SearchTabButtons'
const { DateSetButton, GuestSetNumButton, PriceSetButton, TimeSetButton  } = SearchTabButtons;

function TripSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event); 
    const GuestSetNumButtonProps = { guestNum : props.guestNum, toddlerNum: props.toddlerNum}
    return (
        <SearchTabStyle>
            <h4>TripSearchPanel</h4>
            <DateSetButton passButtonClick={passButtonClick} />
            <GuestSetNumButton passButtonClick={passButtonClick} {...GuestSetNumButtonProps} />
            <PriceSetButton passButtonClick={passButtonClick} />
            <TimeSetButton passButtonClick={passButtonClick} />
        </SearchTabStyle>
    )
}
export { TripSearchTab };
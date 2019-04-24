import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchTabButtons } from './SearchOptions/SearchTabButtons'
const { DateSetButton, GuestSetNumButton } = SearchTabButtons;

function RestaurantSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event); 
    const GuestSetNumButtonProps = { guestNum : props.guestNum, toddlerNum: props.toddlerNum}
    return (
        <SearchTabStyle>
            <h4>RestaurantSearchPanel</h4>
            <DateSetButton passButtonClick={passButtonClick} />
            <GuestSetNumButton passButtonClick={passButtonClick} {...GuestSetNumButtonProps} />
        </SearchTabStyle>
    )
}

export { RestaurantSearchTab };
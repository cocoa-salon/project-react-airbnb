import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchTabButtons } from './SearchOptions/SearchTabButtons'
const { DateSetButton, GuestSetNumButton } = SearchTabButtons;

function RestaurantSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event); 
    
    return (
        <SearchTabStyle>
            <h4>RestaurantSearchPanel</h4>
            <DateSetButton passButtonClick={passButtonClick} />
            <GuestSetNumButton passButtonClick={passButtonClick} guestNum={props.guestNum} toddlerNum={props.toddlerNum} passButtonClick={passButtonClick} />
        </SearchTabStyle>
    )
}

export { RestaurantSearchTab };
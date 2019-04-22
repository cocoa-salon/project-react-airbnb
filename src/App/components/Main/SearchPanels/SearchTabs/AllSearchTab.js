import React from 'react';

import { SearchTabStyle } from './SearchTabStyle'
import { SearchTabButtons } from './SearchOptions/SearchTabButtons'
const { DateSetButton, GuestSetNumButton } = SearchTabButtons;


function AllSearchTab(props) {
    const passButtonClick = event => props.passButtonClick(event); 
    
    return (
        <SearchTabStyle >
            <h4>AllSearchPanel</h4>
            <DateSetButton passButtonClick={passButtonClick}  />
            <GuestSetNumButton guestNum={props.guestNum} toddlerNum={props.toddlerNum} passButtonClick={passButtonClick}/>
        </SearchTabStyle>

// 여기에?


    )
}

export { AllSearchTab };
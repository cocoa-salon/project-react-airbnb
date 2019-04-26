import React from 'react';
import { Route } from 'react-router-dom';
import { SelectedSearchOptionTab } from './SelectedSearchOptionTab';

const SearchOptionTabs = (props) => {
    
    const selectedTabName = props.selectedTabName;

    const guestTabProps = { 
        isButtonActivated : props.isButtonActivated, 
        calculateGuestNum: props.calculateGuestNum, 
        adultNum : props.adultNum, 
        childNum : props.childNum, 
        toddlerNum : props.toddlerNum, 
        resetGuestNum: props.resetGuestNum
    }

    const handleOnMouseLeave = () => {
        props.handleOnMouseLeave();
    };
    const handleOnMouseEnter = () => {
        props.handleOnMouseEnter();
    };

    return (
        <div>
            <Route path={`${props.optionTabUrl}/:id`} render={(props) =>
                <SelectedSearchOptionTab
                    handleOnMouseLeave={handleOnMouseLeave}
                    handleOnMouseEnter={handleOnMouseEnter}
                    selectedTabName={selectedTabName}
                    match={props.match} 
                    {...guestTabProps}
                />     
            }
            />
        </div>
    )
}

export { SearchOptionTabs };

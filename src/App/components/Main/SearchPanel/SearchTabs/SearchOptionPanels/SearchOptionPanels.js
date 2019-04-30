import React from 'react';
import { Route } from 'react-router-dom';
import { SelectedSearchOptionPanels } from './SelectedSearchOptionPanels';

const SearchOptionPanels = (props) => {
    
    const selectedTabName = props.selectedTabName;

    const guestTabProps = { 
        isButtonActivated : props.isButtonActivated, 
        calculateGuestNum: props.calculateGuestNum, 
        adultNum : props.adultNum, 
        childNum : props.childNum, 
        toddlerNum : props.toddlerNum, 
        resetGuestNum: props.resetGuestNum
    }

    const innTypeTabProps = {
        handleInputChange : props.handleInputChange,
        innTypes : props.innTypes
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
                <SelectedSearchOptionPanels
                    handleOnMouseLeave={handleOnMouseLeave}
                    handleOnMouseEnter={handleOnMouseEnter}
                    selectedTabName={selectedTabName}
                    match={props.match} 
                    {...guestTabProps}
                    {...innTypeTabProps}
                />     
            }
            />
        </div>
    )
}

export { SearchOptionPanels };

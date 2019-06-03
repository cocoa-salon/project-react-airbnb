import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DatesTapDisplay from './OptionTabDisplay/DatesTapDisplay';
import GuestsTapDisplay from './OptionTabDisplay/GuestsTapDisplay';
import TypeOfPlaceTapDisplay from './OptionTabDisplay/TypeOfPlaceTapDisplay';
import InstantBookTapDisplay from './OptionTabDisplay/InstantBookTapDisplay';
import PriceTapDisplay from './OptionTabDisplay/PriceTapDisplay';
import TimeTapDisplay from './OptionTabDisplay/TimeTapDisplay';
import MoreFiltersTapDisplay from './OptionTabDisplay/MoreFiltersTapDisplay';

import { SearchTabContext } from '../SearchTabs';
import { OptionPanelSetContext } from '../../../Header';
import { ClosePanelContext } from '../../../../Main';

let selectedPanelName = "";

const SearchOptionTabs = (props) => {

    const matchContext = useContext(SearchTabContext);
    const optionPanelSetContext = useContext(OptionPanelSetContext);
    const closePanelContext = useContext(ClosePanelContext);


    const SearchOptionTabArea = styled.div`
        width: auto;
        height: auto;
        margin-left: 10px; 
    `

    const SearchOptionTabStyle = styled.button`
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 8px;
        padding-bottom: 8px;
        background: white;
        border: rgb(230,230,230) solid 1px; 
        border-radius: 4px; 
        font-size: 14px; 
        font-weight: thin;
        color: rgb(60,60,60); 
        background: ${props => optionPanelSetContext.isSearchOptionTabActivated[props.name] ? "rgb(15,114,118)" : "white"};
        color: ${props => optionPanelSetContext.isSearchOptionTabActivated[props.name] ? "white" : "black"};
        &:hover {
            ${props => optionPanelSetContext.isSearchOptionTabActivated[props.name] ? `background: rgb(30,90,93)` : `background: rgb(230,230,230)`};
            border-radius: none; 
            outline: 0; ;
        }
        cursor: pointer;
`

    const handleIsOnMouseLeaveTab = (event) => {
        let cursorOff = event.target.dataset.cursorOff;
        event.type === "mouseleave" ? cursorOff = true : cursorOff = false;
        closePanelContext.handleIsOnMouseLeaveTab(cursorOff);
    };

    const passOptionTabUrl = (event) => {
        const currentName = event.currentTarget.name
        const isPanelClosed = closePanelContext.isPanelClosed;
        const setIsPanelClosed = closePanelContext.setIsPanelClosed;
        if ( selectedPanelName === currentName ) {
            setIsPanelClosed(!isPanelClosed);
            selectedPanelName = currentName;
            closePanelContext.toggleDimmedSections();
        } else {
            setIsPanelClosed(false);
            selectedPanelName = currentName;
            closePanelContext.applyDimmedSections();
        };
        closePanelContext.setSearchOptionTabUrl(matchContext.match.url);
    } ;

    return (
        <SearchOptionTabArea>
            <Link to={`${matchContext.match.url}/${props.type}`}
                name={props.type}
                onClick={passOptionTabUrl}
                data-cursoroff={true}
                onMouseLeave={handleIsOnMouseLeaveTab}
                onMouseEnter={handleIsOnMouseLeaveTab}
            >
                <SearchOptionTabStyle name={props.type}> {
                    (props.type === 'dates' && <DatesTapDisplay />) ||
                    (props.type === 'guests' && <GuestsTapDisplay />) ||
                    (props.type === 'typeOfPlace' && <TypeOfPlaceTapDisplay typeOfPlace={optionPanelSetContext.typeOfPlace} />) ||
                    (props.type === 'instantBook' && <InstantBookTapDisplay />) ||
                    (props.type === 'price' && <PriceTapDisplay />) ||
                    (props.type === 'time' && <TimeTapDisplay />) ||
                    (props.type === 'moreFilters' && <MoreFiltersTapDisplay />)
                }
                </SearchOptionTabStyle>
            </Link>
        </SearchOptionTabArea>
    );
};

export default SearchOptionTabs;




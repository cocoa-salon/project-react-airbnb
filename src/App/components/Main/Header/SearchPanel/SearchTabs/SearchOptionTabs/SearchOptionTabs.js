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

const SearchOptionTabs = (props) => {

    const matchContextValue = useContext(SearchTabContext);
    const searchTabContextValue = useContext(OptionPanelSetContext);
    const mouseLeaveContextValue = useContext(ClosePanelContext);

    const SearchOptionTabStyle = styled.button`
    display: inline-block;
    width: auto;
    height: auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    background: white;
    border: rgb(230,230,230) solid 1px; 
    border-radius: 4px; 
    font-size: 14px; 
    font-weight: thin;
    margin-left: 10px;
    color: rgb(60,60,60); 
    background: ${props => searchTabContextValue.isSearchOptionTabActivated[props.name] ? "rgb(15,114,118)" : "white"};
    color: ${props => searchTabContextValue.isSearchOptionTabActivated[props.name] ? "white" : "black"};
    &:hover {
        ${props => searchTabContextValue.isSearchOptionTabActivated[props.name] ? `background: rgb(30,90,93)`  : `background: rgb(230,230,230)`};
        border-radius: none; 
        outline: 0; ;
    }
    cursor: pointer;
`    

    const handleIsOnMouseLeaveTab = (event) => {
        let cursorOff = event.target.dataset.cursorOff;
        event.type === "mouseleave" ?  cursorOff = true : cursorOff = false; 
        mouseLeaveContextValue.handleIsOnMouseLeaveTab(cursorOff);
    };

    return (
        <Link to={`${matchContextValue.match.url}/${props.type}`} 
            name={props.type} 
            onClick={(event) => mouseLeaveContextValue.passSelectedTab(event, matchContextValue.match.url)}
            data-cursoroff={true}
            onMouseLeave={handleIsOnMouseLeaveTab} 
            onMouseEnter={handleIsOnMouseLeaveTab}
        >
            <SearchOptionTabStyle name={props.type} > {
                (props.type === 'dates' && <DatesTapDisplay />) ||
                (props.type === 'guests' && <GuestsTapDisplay />) ||
                (props.type === 'typeOfPlace' && <TypeOfPlaceTapDisplay typeOfPlace={searchTabContextValue.typeOfPlace} />) ||
                (props.type === 'instantBook' && <InstantBookTapDisplay />) ||
                (props.type === 'price' && <PriceTapDisplay />) ||
                (props.type === 'time' && <TimeTapDisplay />) ||
                (props.type === 'morefilters' && <MoreFiltersTapDisplay />)
            }
            </SearchOptionTabStyle>
        </Link>
    )

}

export default SearchOptionTabs; 




import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { SearchOptionTabStyle } from './SearchOptionTabStyle';

import { DateTapDisplay } from './OptionTabDisplay/DateTapDisplay';
import { GuestTapDisplay } from './OptionTabDisplay/GuestTapDisplay';
import { InnTypeTapDisplay } from './OptionTabDisplay/InnTypeTapDisplay';
import { InstantBookTapDisplay } from './OptionTabDisplay/InstantBookTapDisplay';
import { PriceTapDisplay } from './OptionTabDisplay/PriceTapDisplay';
import { TimeTapDisplay } from './OptionTabDisplay/TimeTapDisplay';
import { FilterAddTapDisplay } from './OptionTabDisplay/FilterAddTapDisplay';

import { SearchTabContext } from '../SearchTabs';
import { ClosePanelContext } from '../../../Main.js';


const SearchOptionTabs = (props) => {

    const searchTabContextValue = useContext(SearchTabContext);
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
    background: ${props => searchTabContextValue.isTabActivated[props.name] ? "rgb(15,114,118)" : "white"};
    color: ${props => searchTabContextValue.isTabActivated[props.name] ? "white" : "black"};
    &:hover {
        ${props => searchTabContextValue.isTabActivated[props.name] ? `background: rgb(30,90,93)`  : `background: rgb(230,230,230)`};
        border-radius: none; 
        outline: 0; ;
    }
    cursor: pointer;
`    

    const handleIsOnMouseLeaveTab = (event) => {
        let cursorOff = event.target.dataset.cursorOff;
        event.type === "mouseleave" ?  cursorOff = true : cursorOff = false; 
        mouseLeaveContextValue.handleIsOnMouseLeaveTab(cursorOff);
    }

    return (
        <Link to={`${searchTabContextValue.match.url}/${props.type}`} 
            name={props.type} 
            onClick={(event) => searchTabContextValue.passButtonClick(event, searchTabContextValue.match.url)}
            data-cursoroff={true}
            onMouseLeave={handleIsOnMouseLeaveTab} 
            onMouseEnter={handleIsOnMouseLeaveTab}
        >
            <SearchOptionTabStyle name={props.type}> {
                (props.type === 'date' && <DateTapDisplay />) ||
                (props.type === 'guest' && <GuestTapDisplay />) ||
                (props.type === 'innType' && <InnTypeTapDisplay innTypes={searchTabContextValue.innTypes} />) ||
                (props.type === 'instantBook' && <InstantBookTapDisplay />) ||
                (props.type === 'price' && <PriceTapDisplay />) ||
                (props.type === 'time' && <TimeTapDisplay />) ||
                (props.type === 'filterAdd' && <FilterAddTapDisplay />)
            }
            </SearchOptionTabStyle>
        </Link>
    )

}

export { SearchOptionTabs }




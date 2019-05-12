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

const SearchOptionTabs = (props) => {

    const value = useContext(SearchTabContext);

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
    background: ${props => value.isTabActivated[props.name] ? "rgb(15,114,118)" : "white"};
    color: ${props => value.isTabActivated[props.name] ? "white" : "black"};
    &:hover {
        ${props => value.isTabActivated[props.name] ? `background: rgb(30,90,93)`  : `background: rgb(230,230,230)`};
        border-radius: none; 
        outline: 0; ;
    }
`    

return (
    <Link to={`${value.match.url}/${props.type}`} onClick={(event) => value.passButtonClick(event, value.match.url)}>
        <SearchOptionTabStyle name={props.type}> {
            (props.type === 'date' && <DateTapDisplay />) ||
            (props.type === 'guest' && <GuestTapDisplay />) ||
            (props.type === 'innType' && <InnTypeTapDisplay innTypes={value.innTypes} />) ||
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




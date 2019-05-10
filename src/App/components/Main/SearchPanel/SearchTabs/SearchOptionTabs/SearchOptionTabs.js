import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchOptionTabStyle } from './SearchOptionTabStyle';

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


    const highlightStyle = {
        background: "rgb(15,114,118)",
        color: "white"
    }

    const disableHighlightStyle = {
        background: "white",
        color: "black"
    }

    const highlightTab = (name) => {
        console.log(value.isTabActivated.name);
        
        if(name !== value.isTabActivated.name) return; 
        if(value.isTabActivated.checked) return highlightStyle;
        else return disableHighlightStyle;
    }
    
    return (
        <Link to={`${value.match.url}/${props.type}`} onClick={(event) => value.passButtonClick(event, value.match.url)}>
            <SearchOptionTabStyle style={highlightTab(props.type)} name={props.type}> {
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




import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOptionTabStyle } from './SearchOptionTabStyle';

import { DateTapDisplay } from './OptionTabDisplay/DateTapDisplay';
import { GuestTapDisplay } from './OptionTabDisplay/GuestTapDisplay';
import { InnTypeTapDisplay } from './OptionTabDisplay/InnTypeTapDisplay';
import { InstantBookTapDisplay } from './OptionTabDisplay/InstantBookTapDisplay';
import { PriceTapDisplay } from './OptionTabDisplay/PriceTapDisplay';
import { TimeTapDisplay } from './OptionTabDisplay/TimeTapDisplay';
import { FilterAddTapDisplay } from './OptionTabDisplay/FilterAddTapDisplay';


const SearchOptionTabs = (props) => {

    function passButtonClick(event) {
        const optionTabUrl = props.match.url;
        props.passButtonClick(event);
        props.passTabUrl(optionTabUrl);
    }

    return (
        <Link to={`${props.match.url}/${props.type}`} onClick={passButtonClick}>
            <SearchOptionTabStyle name={props.type}> {
                (props.type === 'date' && <DateTapDisplay {...props} />) ||
                (props.type === 'guest' && <GuestTapDisplay {...props} />) ||
                (props.type === 'innType' && <InnTypeTapDisplay {...props} />) ||
                (props.type === 'instantBook' && <InstantBookTapDisplay {...props} />) ||
                (props.type === 'price' && <PriceTapDisplay {...props} />) ||
                (props.type === 'time' && <TimeTapDisplay {...props} />) ||
                (props.type === 'filterAdd' && <FilterAddTapDisplay {...props} />)
            }
            </SearchOptionTabStyle>
        </Link>
    )
}

export { SearchOptionTabs }




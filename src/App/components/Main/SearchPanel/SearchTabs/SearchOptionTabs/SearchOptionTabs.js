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

import { SearchTabConsumer } from '../SearchTabs';


const SearchOptionTabs = (props) => {

    return (
        <SearchTabConsumer> 
            {
                (value) => (
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
        </SearchTabConsumer>
    )
}

export { SearchOptionTabs }




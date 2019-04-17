import React from 'react';

import { Calendar } from './OptionButtons/Calendar';
import { Guest } from './OptionButtons/Guest';
import { Price } from './OptionButtons/Price';
import { Time } from './OptionButtons/Time';

function TripSearchOption(props) {
    return (
        <div>
            <h4>TripSearchPanel</h4>
            <Calendar />
            <Guest />
            <Price />
            <Time />
        </div>
    )
}
export { TripSearchOption };
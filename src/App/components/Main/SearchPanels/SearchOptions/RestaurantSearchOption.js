import React from 'react';

import { Calendar } from './OptionButtons/Calendar';
import { Guest } from './OptionButtons/Guest';

function RestaurantSearchOption(props) {
    return (
        <div>
            <h4>RestaurantSearchPanel</h4>
            <Calendar />
            <Guest />
        </div>
    )
}

export { RestaurantSearchOption };
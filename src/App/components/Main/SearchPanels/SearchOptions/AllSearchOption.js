import React from 'react';

import { Calendar } from './OptionButtons/Calendar';
import { Guest } from './OptionButtons/Guest';

function AllSearchOption(props) {
    return (
        <div>
            <h4>AllSearchPanel</h4>
            <Calendar />
            <Guest />
        </div>
    )
}

export { AllSearchOption };
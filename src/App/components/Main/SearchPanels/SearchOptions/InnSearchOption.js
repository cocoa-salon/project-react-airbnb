import React from 'react';

import { Calendar } from './OptionButtons/Calendar';
import { Guest } from './OptionButtons/Guest';
import { InnType } from './OptionButtons/InnType';
import { Price } from './OptionButtons/Price';
import { InstantBook } from './OptionButtons/InstantBook';
import { AddFilters } from './OptionButtons/AddFilters';


function InnSearchOption(props) {
    return (
        <div>
            <h4>InnSearchPanel</h4>
            <Calendar />
            <Guest />
            <InnType />
            <Price />
            <InstantBook />
            <AddFilters />
        </div>
    )
}

export { InnSearchOption };
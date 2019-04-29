import React from 'react';

import { Calendar } from './OptionTabs/Calendar'
import { Guest } from './OptionTabs/Guest'
import { InnType } from './OptionTabs/InnType'
import { InstantBook } from './OptionTabs/InstantBook'
import { Price } from './OptionTabs/Price'
import { Time } from './OptionTabs/Time'
import { AddFilters } from './OptionTabs/AddFilters'

const SelectedSearchOptionTab = ({ match, selectedTabName, guestTabProps, ...rest }) => {
    const tabName = selectedTabName;
    const id = match.params.id;
    return (
                (tabName === "none" && <div>{null}</div>) ||
                (id === "date" && <Calendar {...rest} />) ||
                (id === "guest" && <Guest {...rest} {...guestTabProps} />) ||
                (id === "innType" && <InnType {...rest} />) ||
                (id === "instantBook" && <InstantBook {...rest} />) ||
                (id === "price" && <Price {...rest} />) ||
                (id === "time" && <Time {...rest} />) ||
                (id === "filterAdd" && <AddFilters {...rest} />)
    )
};

export { SelectedSearchOptionTab };

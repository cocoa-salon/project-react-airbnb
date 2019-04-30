import React from 'react';

import { Calendar } from './Calendar'
import { Guest } from './Guest'
import { InnType } from './InnType'
import { InstantBook } from './InstantBook'
import { Price } from './Price'
import { Time } from './Time'
import { AddFilters } from './AddFilters'

const SelectedSearchOptionPanels = ({ match, selectedTabName, guestTabProps, innTypeTabProps, ...rest }) => {
    const tabName = selectedTabName;
    const id = match.params.id;
    return (
                (tabName === "none" && <div>{null}</div>) ||
                (id === "date" && <Calendar {...rest} />) ||
                (id === "guest" && <Guest {...rest} {...guestTabProps} />) ||
                (id === "innType" && <InnType {...rest} {...innTypeTabProps} />) ||
                (id === "instantBook" && <InstantBook {...rest} />) ||
                (id === "price" && <Price {...rest} />) ||
                (id === "time" && <Time {...rest} />) ||
                (id === "filterAdd" && <AddFilters {...rest} />)
    )
};

export { SelectedSearchOptionPanels };

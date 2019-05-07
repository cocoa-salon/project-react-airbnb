import React, {useContext} from 'react';

import { Calendar } from './Calendar'
import { Guest } from './Guest'
import { InnType } from './InnType'
import { InstantBook } from './InstantBook'
import { Price } from './Price'
import { Time } from './Time'
import { AddFilters } from './AddFilters'

import { SearchOptionPanelContext } from '../SearchTabs';

const SelectedSearchOptionPanels = ({ match}) => {
    const value = useContext(SearchOptionPanelContext);
    const id = match.params.id;
    return (
            (value.selectedTabName === "none" && <div>{null}</div>) ||
            (id === "date" && <Calendar />) ||
            (id === "guest" && <Guest />) ||
            (id === "innType" && <InnType />) ||
            (id === "instantBook" && <InstantBook />) ||
            (id === "price" && <Price />) ||
            (id === "time" && <Time />) ||
            (id === "filterAdd" && <AddFilters />)
    )
};

export { SelectedSearchOptionPanels };

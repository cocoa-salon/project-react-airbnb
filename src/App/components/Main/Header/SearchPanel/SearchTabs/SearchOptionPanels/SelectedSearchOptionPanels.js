import React, {useContext} from 'react';

import  Calendar from './Calendar'
import  Guest from './Guest'
import  InnType from './InnType'
import  InstantBook from './InstantBook'
import  Price from './Price'
import  Time from './Time'
import  AddFilters from './AddFilters'

import { ClosePanelContext } from '../../../../Main';

const SelectedSearchOptionPanels = ({ match}) => {
    const mouseLeaveContextValue = useContext(ClosePanelContext);
    const id = match.params.id;
    return (
            (mouseLeaveContextValue.selectedTab === "none" && <div>{null}</div>) ||
            (id === "date" && <Calendar />) ||
            (id === "guest" && <Guest />) ||
            (id === "innType" && <InnType />) ||
            (id === "instantBook" && <InstantBook />) ||
            (id === "price" && <Price />) ||
            (id === "time" && <Time />) ||
            (id === "filterAdd" && <AddFilters />)
    )
};

export default SelectedSearchOptionPanels;

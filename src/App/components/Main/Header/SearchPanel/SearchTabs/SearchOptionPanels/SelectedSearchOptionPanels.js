import React, { useContext } from 'react';

import Dates from './Dates';
import Guests from './Guests';
import TypeOfPlace from './TypeOfPlace';
import InstantBook from './InstantBook';
import Price from './Price';
import Time from './Time';
import MoreFilters from './MoreFilters';

import { ClosePanelContext } from '../../../../Main';

const SelectedSearchOptionPanels = ({ match }) => {
    const closePanelContext = useContext(ClosePanelContext);
    const id = match.params.id; 

    return (
        (closePanelContext.isPanelClosed === true && <div>{null}</div>) ||
        (id === "dates" && <Dates />) ||
        (id === "guests" && <Guests />) ||
        (id === "typeOfPlace" && <TypeOfPlace />) ||
        (id === "instantBook" && <InstantBook />) ||
        (id === "price" && <Price />) ||
        (id === "time" && <Time />) ||
        (id === "moreFilters" && <MoreFilters />)
    );
};

export default SelectedSearchOptionPanels;

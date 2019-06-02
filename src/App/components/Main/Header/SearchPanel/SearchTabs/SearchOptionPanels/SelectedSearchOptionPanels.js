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
    const panelName = closePanelContext.isSearchOptionPanelsActivated;

    const closeSearchOptionPanel = () => {
        if (!Object.values(closePanelContext.isSearchOptionPanelsActivated).includes(true)) {
            closePanelContext.clearDimmedSections();
            return true;
        };
    };

    return (
        (closeSearchOptionPanel() && <div>{null}</div>) ||
        (panelName.dates && <Dates />) ||
        (panelName.guests && <Guests />) ||
        (panelName.typeOfPlace && <TypeOfPlace />) ||
        (panelName.instantBook && <InstantBook />) ||
        (panelName.price && <Price />) ||
        (panelName.time && <Time />) ||
        (panelName.moreFilters && <MoreFilters />)
    );
};

export default SelectedSearchOptionPanels;

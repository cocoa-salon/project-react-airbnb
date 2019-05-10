import React, { useContext } from 'react';
import { SearchTabContext } from '../../SearchTabs';

const PriceTapDisplay = (props) => {

    const value = useContext(SearchTabContext);

    return (
        <span>가격</span>
    );
}

export { PriceTapDisplay };
import React, { useContext } from 'react';
import { SearchTabContext } from '../../SearchTabs';

const InstantBookTapDisplay = (props) => {

    const value = useContext(SearchTabContext);

    return (
        <span>즉시예약</span>
    );

}

export { InstantBookTapDisplay };
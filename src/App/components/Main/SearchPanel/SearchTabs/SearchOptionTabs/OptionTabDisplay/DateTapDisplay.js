import React, { useContext } from 'react';
import { SearchTabContext } from '../../SearchTabs';

const DateTapDisplay = (props) => {
    const value = useContext(SearchTabContext);

    return (
        <span>날짜</span>
    )
}

export { DateTapDisplay }; 
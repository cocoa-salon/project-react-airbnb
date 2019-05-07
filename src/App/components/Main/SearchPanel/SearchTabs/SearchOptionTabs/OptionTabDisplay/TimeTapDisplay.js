import React, { useContext } from 'react';
import { SearchTabContext } from '../../SearchTabs';


const TimeTapDisplay = (props) => {

    const value = useContext(SearchTabContext);

    return (
        <span>시간</span>
    )
}

export { TimeTapDisplay };

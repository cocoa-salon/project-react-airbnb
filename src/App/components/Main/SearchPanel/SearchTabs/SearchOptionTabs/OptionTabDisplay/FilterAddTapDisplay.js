import React, { useContext } from 'react';
import { SearchTabContext } from '../../SearchTabs';


const FilterAddTapDisplay = (props) => {

    const value = useContext(SearchTabContext);

    return (
        <span>필터 추가</span>
    )
}

export { FilterAddTapDisplay };

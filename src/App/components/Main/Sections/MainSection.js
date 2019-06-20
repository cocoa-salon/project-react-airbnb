import React, { useContext, useEffect } from 'react';
import { FetchQueryContext } from '../Main';
import Placeholder from './Placeholder';
import SubPlaceholder from './SubPlaceholder';
import { nextItemsIdxDefault } from '../../../setting_values/setting_values'
import StyledItemsListUl from './StyledItemsListUl';
import SectionItemsDisplay from './SectionItemsDisplay';

const MainSection = () => {

    const fetchQueryContext = useContext(FetchQueryContext);

    useEffect(() => {
        fetchQueryContext.operateFetchQuery(nextItemsIdxDefault, true);
    }, []);

    return <SectionItemsDisplay />
};

export default MainSection;
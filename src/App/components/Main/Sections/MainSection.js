import React, { useContext, useEffect } from 'react';
import { FetchQueryContext } from '../Main';
import { nextItemsIdxDefault } from '../../../setting_values/setting_values';
import SectionItemsDisplay from './SectionItemsDisplay';
import ScrollToTopOnMount from './ScrollToTopOnMount';

const MainSection = () => {

    const fetchQueryContext = useContext(FetchQueryContext);

    useEffect(() => {
        fetchQueryContext.operateFetchQuery(nextItemsIdxDefault, true, true);
    }, []);

    return (
        <>
            <ScrollToTopOnMount />
            <SectionItemsDisplay />
        </>
    );
};

export default MainSection;
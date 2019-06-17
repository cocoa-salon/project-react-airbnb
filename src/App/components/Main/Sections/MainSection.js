import React, { useContext, useEffect } from 'react';
import { FetchQueryContext } from '../Main';
import SectionsPlaceholder from './SectionsPlaceholder';

const MainSection = () => {

    useEffect(() => {
        fetchQueryContext.operateFetchQuery("");
    }, []); 

    const fetchQueryContext = useContext(FetchQueryContext);

    return (
        fetchQueryContext.isFallBackMsg ? <SectionsPlaceholder /> :
        <ul style={{ listStyle: "none" }}>{fetchQueryContext.stayLists}</ul>
    );
};

export default MainSection;
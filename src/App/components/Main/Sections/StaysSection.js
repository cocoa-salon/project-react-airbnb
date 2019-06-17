import React, { useContext } from 'react';
import { FetchQueryContext } from '../Main';
import SectionsPlaceholder from './SectionsPlaceholder';

const StaysSection = () => {

    const fetchQueryContext = useContext(FetchQueryContext);

    return (
        fetchQueryContext.isFallBackMsg ? <SectionsPlaceholder /> :
        <ul style={{ listStyle: "none" }}>{fetchQueryContext.stayLists}</ul>
    );
};

export default StaysSection;
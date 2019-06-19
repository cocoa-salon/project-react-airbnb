import React, { useContext } from 'react';
import { FetchQueryContext } from '../Main';
import Placeholder from './Placeholder';
import SubPlaceholder from './SubPlaceholder';

const StaysSection = () => {

    const fetchQueryContext = useContext(FetchQueryContext);

    return (
        fetchQueryContext.isFallBackMsg ? <Placeholder /> :
            <ul style={{ listStyle: "none" }}> {
                fetchQueryContext.stayLists
            }
                {fetchQueryContext.IsLoadingMsg ? <SubPlaceholder /> :
                    null
                }
            </ul>
    );
};

export default StaysSection;
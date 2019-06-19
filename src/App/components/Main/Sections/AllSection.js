import React, { useContext } from 'react';
import { FetchQueryContext } from '../Main';
import Placeholder from './Placeholder';
import SubPlaceholder from './SubPlaceholder';

const AllSection = () => {

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

export default AllSection;
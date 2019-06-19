import React, { useContext, useEffect } from 'react';
import { FetchQueryContext } from '../Main';
import Placeholder from './Placeholder';
import SubPlaceholder from './SubPlaceholder';
import { nextItemsIdxDefault } from '../../../setting_values/setting_values'


const MainSection = () => {

    const fetchQueryContext = useContext(FetchQueryContext);

    useEffect(() => {
        fetchQueryContext.operateFetchQuery(nextItemsIdxDefault, true);
    }, []);

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

export default MainSection;
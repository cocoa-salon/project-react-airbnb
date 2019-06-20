import React, { useContext } from 'react';
import { FetchQueryContext } from '../Main';
import StyledItemsListUl from './StyledItemsListUl';
import Placeholder from './Placeholder';
import SubPlaceholder from './SubPlaceholder';

const SectionItemsDisplay = () => {
    const fetchQueryContext = useContext(FetchQueryContext);

    return (
        <>
            {fetchQueryContext.isFallBackMsg ? <Placeholder /> :
                <StyledItemsListUl>
                    {fetchQueryContext.stayLists}
                </StyledItemsListUl>
            }
            {fetchQueryContext.IsLoadingMsg ? <SubPlaceholder /> : null}
        </>
    );
};

export default SectionItemsDisplay;
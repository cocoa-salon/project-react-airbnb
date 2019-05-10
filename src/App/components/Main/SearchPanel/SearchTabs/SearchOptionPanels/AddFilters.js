import React, {useContext} from 'react';
import { OptionTabStyle } from './OptionTabStyle';
import { SearchOptionPanelContext } from '../SearchTabs';

function AddFilters(props) {

    const value = useContext(SearchOptionPanelContext);

    return (
        <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter}>
            필터를 추가하는 옵션 패널
        </OptionTabStyle>
    )
}

export { AddFilters };
import React, { useContext } from 'react';
import { OptionTabStyle } from './OptionTabStyle';
import { SearchOptionPanelContext } from '../SearchTabs';

function Time(props) {

    const value = useContext(SearchOptionPanelContext);

    return (
        <OptionTabStyle>
            시간대를 설정하는 옵션 패널
        </OptionTabStyle>
    )
}

export { Time };
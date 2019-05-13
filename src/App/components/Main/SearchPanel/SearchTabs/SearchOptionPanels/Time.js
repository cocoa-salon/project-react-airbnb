import React, { useContext } from 'react';
import { OptionTabStyle } from './OptionTabStyle';
import { SearchOptionPanelContext } from '../SearchTabs';
import { ClosePanelContext } from '../../../Main.js';

function Time(props) {

    const value = useContext(SearchOptionPanelContext);
    const value2 = useContext(ClosePanelContext);

    return (
        <OptionTabStyle onMouseLeave={value2.handleOnMouseLeave} onMouseEnter={value2.handleOnMouseEnter}>
            시간대를 설정하는 옵션 패널
        </OptionTabStyle>
    )
}

export { Time };
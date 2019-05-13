import React, { useContext } from 'react';
import { OptionTabStyle } from './OptionTabStyle';
import { SearchOptionPanelContext } from '../SearchTabs';
import { ClosePanelContext } from '../../../Main.js';

function Price(props) {

    const value = useContext(SearchOptionPanelContext);
    const value2 = useContext(SearchOptionPanelContext);

    return (
        <OptionTabStyle onMouseLeave={value2.handleOnMouseLeave} onMouseEnter={value2.handleOnMouseEnter}>
            가격대를 설정하는 옵션 패널
        </OptionTabStyle>
    )
}

export { Price };
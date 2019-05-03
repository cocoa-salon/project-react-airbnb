import React from 'react';

import { OptionTabStyle } from './OptionTabStyle';

import { SearchOptionPanelConsumer } from '../SearchTabs';

function Price(props) {

    return (
        <SearchOptionPanelConsumer>
            { (value) => 
            <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter}>
            가격대를 설정하는 옵션 패널
            </OptionTabStyle>
            }
        </SearchOptionPanelConsumer>
    )
}

export { Price };
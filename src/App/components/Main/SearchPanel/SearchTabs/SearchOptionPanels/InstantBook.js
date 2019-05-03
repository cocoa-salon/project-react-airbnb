import React from 'react';

import { OptionTabStyle } from './OptionTabStyle';

import { SearchOptionPanelConsumer } from '../SearchTabs';


function InstantBook(props) {

    return (
        <SearchOptionPanelConsumer>
            { (value) => 
            <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter}>
            즉시예약을 설정하는 옵션 패널
            </OptionTabStyle>
            }
        </SearchOptionPanelConsumer>
    )
}

export { InstantBook };
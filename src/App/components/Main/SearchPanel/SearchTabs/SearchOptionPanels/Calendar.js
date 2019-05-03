import React from 'react';
import { OptionTabStyle } from './OptionTabStyle';

import { SearchOptionPanelConsumer } from '../SearchTabs';

function Calendar(props) {

    return (
        <SearchOptionPanelConsumer>
            { (value) => 
            <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter}>
                달력, 기간을 설정하는 옵션 패널
            </OptionTabStyle>
            }
        </SearchOptionPanelConsumer>
    )
}

export { Calendar };
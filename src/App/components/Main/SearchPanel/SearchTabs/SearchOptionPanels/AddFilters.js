import React from 'react';
import { OptionTabStyle } from './OptionTabStyle';

import { SearchOptionPanelConsumer } from '../SearchTabs';

function AddFilters(props) {

    return (
        <SearchOptionPanelConsumer>
            {(value) =>
                <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter}>
                    필터를 추가하는 옵션 패널
           </OptionTabStyle>
            }
        </SearchOptionPanelConsumer>
    )
}

export { AddFilters };
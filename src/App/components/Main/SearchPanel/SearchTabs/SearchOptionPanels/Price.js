import React, { useContext } from 'react';
import { OptionTabStyle } from './OptionTabStyle';
import { SearchOptionPanelContext } from '../SearchTabs';

function Price(props) {

    const value = useContext(SearchOptionPanelContext);

    return (
        <OptionTabStyle>
            가격대를 설정하는 옵션 패널
        </OptionTabStyle>
    )
}

export { Price };
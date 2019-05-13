import React, { useContext } from 'react';
import { OptionTabStyle } from './OptionTabStyle';
import { ClosePanelContext } from '../../../Main.js';

function Calendar(props) {
    const value = useContext(ClosePanelContext);

    return (
        <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter}>
            달력, 기간을 설정하는 옵션 패널
        </OptionTabStyle>
    )
}

export { Calendar };
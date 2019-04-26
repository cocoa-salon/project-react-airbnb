import React from 'react';

import { OptionTabStyle } from './OptionTabStyle';

function InstantBook(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    return (
        <OptionTabStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            즉시예약을 설정하는 옵션 패널
        </OptionTabStyle>
    )
}

export { InstantBook };
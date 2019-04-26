import React from 'react';

import { OptionTabStyle } from './OptionTabStyle';

function Price(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    return (
        <OptionTabStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            가격대를 설정하는 옵션 패널
        </OptionTabStyle>
    )
}

export { Price };
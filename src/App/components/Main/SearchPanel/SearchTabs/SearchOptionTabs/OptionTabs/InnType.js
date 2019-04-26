import React from 'react';

import { OptionTabStyle } from './OptionTabStyle';


function InnType(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    return (
        <OptionTabStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            숙소 타입을 설정하는 옵션 패널
        </OptionTabStyle>
    )
}

export { InnType };
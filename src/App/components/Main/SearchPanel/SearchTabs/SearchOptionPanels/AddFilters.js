import React from 'react';

import { OptionTabStyle } from './OptionTabStyle';


function AddFilters(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    return (
        <OptionTabStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            필터를 추가하는 옵션 패널
        </OptionTabStyle>
    )
}

export { AddFilters };
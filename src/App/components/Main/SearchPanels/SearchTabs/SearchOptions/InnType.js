import React from 'react';

import { StyledOptionButton } from './OptionButtonStyle'
import { SearchOptionStyle } from './SearchOptionStyle';


function InnType(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    return (
        <SearchOptionStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            숙소 타입을 설정하는 옵션 패널
        </SearchOptionStyle>
    )
}

export { InnType };
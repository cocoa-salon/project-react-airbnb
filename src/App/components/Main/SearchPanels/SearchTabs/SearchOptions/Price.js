import React from 'react';

import { StyledOptionButton } from './OptionButtonStyle'
import { SearchOptionStyle } from './SearchOptionStyle';

function Price(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    return (
        <SearchOptionStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            가격대를 설정하는 옵션 패널
        </SearchOptionStyle>
    )
}

export { Price };
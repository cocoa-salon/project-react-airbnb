import React from 'react';

import { SearchOptionStyle } from './SearchOptionStyle';


function Time(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    return (
        <SearchOptionStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            시간대를 설정하는 옵션 패널
        </SearchOptionStyle>
    )
}

export { Time };
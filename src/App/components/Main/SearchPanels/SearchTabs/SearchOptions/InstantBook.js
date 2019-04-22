import React from 'react';

import { SearchOptionStyle } from './SearchOptionStyle';

function InstantBook(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    return (
        <SearchOptionStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            즉시예약을 설정하는 옵션 패널
        </SearchOptionStyle>
    )
}

export { InstantBook };
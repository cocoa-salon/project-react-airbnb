import React from 'react';

import { SearchOptionStyle } from './SearchOptionStyle';


function AddFilters(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    return (
        <SearchOptionStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            필터를 추가하는 옵션 패널
        </SearchOptionStyle>
    )
}

export { AddFilters };
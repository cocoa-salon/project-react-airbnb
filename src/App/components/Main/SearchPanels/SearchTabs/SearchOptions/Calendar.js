import React from 'react';
import { SearchOptionStyle } from './SearchOptionStyle';

function Calendar(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();
    
    return (
        <SearchOptionStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            달력, 기간을 설정하는 옵션 패널
        </SearchOptionStyle>
    )
}

export { Calendar };
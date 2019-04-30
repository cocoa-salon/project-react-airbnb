import React from 'react';
import { OptionTabStyle } from './OptionTabStyle';

function Calendar(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();
    
    return (
        <OptionTabStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            달력, 기간을 설정하는 옵션 패널
        </OptionTabStyle>
    )
}

export { Calendar };
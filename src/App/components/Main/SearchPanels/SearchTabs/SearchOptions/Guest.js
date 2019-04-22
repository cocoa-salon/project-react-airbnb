import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledOptionButton } from './OptionButtonStyle'
import { SearchOptionStyle } from './SearchOptionStyle';

function Guest(props) {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [adultNum, setAdultNum] = useState(0);
    const [childNum, setChildNum] = useState(0);
    const [infantNum, setInfantNum] = useState(0);
    const [guestNum, setGuestNum] = useState(0);

    const modifyGuestNum = () => setIsDisplayed(!isDisplayed);

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    return (
        <SearchOptionStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            인원을 설정하는 옵션 패널
        </SearchOptionStyle>
    )
}













export { Guest };
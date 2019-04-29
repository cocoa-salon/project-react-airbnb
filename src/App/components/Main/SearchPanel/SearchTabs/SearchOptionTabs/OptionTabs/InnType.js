import React from 'react';
import styled from 'styled-components';

import { OptionTabStyle } from './OptionTabStyle';


function InnType(props) {

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    const name = "name";



    return (
        <OptionTabStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            숙소 타입을 설정하는 옵션 패널
            <div>
                <input type="checkbox" name="allhouse" value="allhouse" /> <div>집 전체</div>   
            </div>
            <div>
                <input type="checkbox" name="privateRoom" value="privateRoom" />개인실
            </div>
            <div>
                <input type="checkbox" name="hotelRoom" value="hotelRoom" />호텔 객실
            </div>
            <div>
                <input type="checkbox" name="publicRoom" value="publicRoom" />다인실
            </div>
        </OptionTabStyle>
    )
}

const checkboxArea = styled.div`
    display: inline-block; 
    position: absolute;
`

export { InnType };
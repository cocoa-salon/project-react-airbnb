import React from 'react';
import styled from 'styled-components';

import { OptionTabStyle } from './OptionTabStyle';


function InnType(props) {
    
    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    const handleInputChange = (event) => {
        props.handleInputChange(event)
    }

    const innTypes = props.innTypes;

    const Checkbox = (props) => {
        return (
            <input type="checkbox" name={props.name} checked={props.innTypes} onChange={props.handleInputChange} />
        )
    }

    return (
        <OptionTabStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            숙소 타입을 설정하는 옵션 패널
            <div>
                <Checkbox name='allhouse' innTypes={innTypes.allhouse} handleInputChange={handleInputChange} />집 전체
            </div>
            <div>
                <Checkbox name='privateRoom' innTypes={innTypes.privateRoom} handleInputChange={handleInputChange} />개인실
            </div>
            <div>
                <Checkbox name='hotelRoom' innTypes={innTypes.hotelRoom} handleInputChange={handleInputChange} />호텔 객실
            </div>
            <div>
                <Checkbox name='publicRoom' innTypes={innTypes.publicRoom} handleInputChange={props.handleInputChange} />다인실
            </div>
        </OptionTabStyle>
    )
}

export { InnType }; 
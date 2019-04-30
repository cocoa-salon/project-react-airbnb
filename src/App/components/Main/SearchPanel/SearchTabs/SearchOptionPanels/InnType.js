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

    const InnTypeCheck = (props) => {
        return (
            <input type="checkbox" name={props.name} checked={props.innTypes} onChange={props.handleInputChange} />
        )
    }

    const resetInnTypeCheck = () => {
        props.resetInnTypeCheck();
    }

    return (
        <OptionTabStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>
            숙소 타입을 설정하는 옵션 패널
            <div>
                <InnTypeCheck name='allhouse' innTypes={innTypes.allhouse} handleInputChange={handleInputChange} />집 전체
            </div>
            <div>
                <InnTypeCheck name='privateRoom' innTypes={innTypes.privateRoom} handleInputChange={handleInputChange} />개인실
            </div>
            <div>
                <InnTypeCheck name='hotelRoom' innTypes={innTypes.hotelRoom} handleInputChange={handleInputChange} />호텔 객실
            </div>
            <div>
                <InnTypeCheck name='publicRoom' innTypes={innTypes.publicRoom} handleInputChange={props.handleInputChange} />다인실
            </div>
            <StyledResetButton name="reset" style={{cursor: 'pointer'}} onClick={resetInnTypeCheck}>
                삭제
            </StyledResetButton>

        </OptionTabStyle>
    )
}


const StyledResetButton = styled.button`
    display: inline-block;
    border-radius: 0%; 
    border: none;
    width: 60px; 
    height:40px;
    margin-left: 30px;
    outline: none;
    font-size: 16px; 
`

export { InnType }; 
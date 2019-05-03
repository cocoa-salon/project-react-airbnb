import React from 'react';
import styled from 'styled-components';

import { OptionTabStyle } from './OptionTabStyle';

import { SearchOptionPanelConsumer } from '../SearchTabs';

function InnType(props) {

    const InnTypeCheck = (props) => {
        return (
            <input type="checkbox" name={props.name} checked={props.innTypes} onChange={props.handleInputChange} />
        )
    }

    return (
        <SearchOptionPanelConsumer>
            {
                (value) => {
                    return (
                        <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter}>
                            숙소 타입을 설정하는 옵션 패널
                            <div>
                                <InnTypeCheck name='allhouse' innTypes={value.innTypes.allhouse} handleInputChange={value.handleInputChange} />집 전체
                            </div>
                            <div>
                                <InnTypeCheck name='privateRoom' innTypes={value.innTypes.privateRoom} handleInputChange={value.handleInputChange} />개인실
                            </div>
                            <div>
                                <InnTypeCheck name='hotelRoom' innTypes={value.innTypes.hotelRoom} handleInputChange={value.handleInputChange} />호텔 객실
                            </div>
                            <div>
                                <InnTypeCheck name='publicRoom' innTypes={value.innTypes.publicRoom} handleInputChange={value.handleInputChange} />다인실
                            </div>
                            <StyledResetButton name="reset" style={{ cursor: 'pointer' }} onClick={value.resetInnTypeCheck}>
                                삭제
                            </StyledResetButton>
                        </OptionTabStyle>
                    )
                }
            }
        </SearchOptionPanelConsumer>
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
import React, { useContext } from 'react';
import styled from 'styled-components';
import { OptionTabStyle } from './OptionTabStyle';
import { SearchOptionPanelContext } from '../SearchTabs';

function InnType(props) {

    const value = useContext(SearchOptionPanelContext);

    const checkInnType = (event) => {
        const name = event.target.name;
        const isChecked = event.target.checked;
        value.dispatch({type: 'check', payload: {name : name, isChecked: isChecked} });
    }

    const resetChecked = () => {
        value.dispatch({type: 'reset'})
    }

    const InnTypeCheck = (props) => {
        return (
            <input type="checkbox" name={props.name} checked={props.innTypes} onChange={props.checkInnType} />
        )
    }

    return (
        <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter}>
            숙소 타입을 설정하는 옵션 패널
            <div>
                <InnTypeCheck name='allhouse' innTypes={value.innTypes.allhouse} checkInnType={checkInnType} />집 전체
            </div>
            <div>
                <InnTypeCheck name='privateRoom' innTypes={value.innTypes.privateRoom} checkInnType={checkInnType} />개인실
            </div>
            <div>
                <InnTypeCheck name='hotelRoom' innTypes={value.innTypes.hotelRoom} checkInnType={checkInnType} />호텔 객실
            </div>
            <div>
                <InnTypeCheck name='publicRoom' innTypes={value.innTypes.publicRoom} checkInnType={checkInnType} />다인실
            </div>
            <StyledResetButton name="reset" style={{ cursor: 'pointer' }} onClick={resetChecked}>
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
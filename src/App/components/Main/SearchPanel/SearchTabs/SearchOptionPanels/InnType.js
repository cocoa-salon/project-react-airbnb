import React, { useContext } from 'react';
import styled from 'styled-components';
import { OptionTabStyle } from './OptionTabStyle';
import { SearchOptionPanelContext } from '../SearchTabs';
import Checkbox from '@material-ui/core/Checkbox';

const innDesc = {
    allhouse: "집 전체를 단독으로 사용합니다.",
    privateRoom: "침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다.",
    hotelRoom: "부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다.",
    publicRoom: "사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다."
}

function InnType(props) {

    const value = useContext(SearchOptionPanelContext);

    const checkboxStyle = {
        color : "#519D9E"
    }

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
            <Checkbox style ={checkboxStyle} name={props.name} checked={props.innTypes} onChange={props.checkInnType} />
        )
    }

    return (
        <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter}>
            <InnTypeDiv>
                <InnTypeCheck name='allhouse' innTypes={value.innTypes.allhouse} checkInnType={checkInnType} />집 전체<br />
                {innDesc.allhouse}
            </InnTypeDiv>
            <InnTypeDiv>
                <InnTypeCheck name='privateRoom' innTypes={value.innTypes.privateRoom} checkInnType={checkInnType} />개인실<br />
                {innDesc.privateRoom}
            </InnTypeDiv>
            <InnTypeDiv>
                <InnTypeCheck name='hotelRoom' innTypes={value.innTypes.hotelRoom} checkInnType={checkInnType} />호텔 객실<br />
                {innDesc.hotelRoom}
            </InnTypeDiv>
            <InnTypeDiv>
                <InnTypeCheck name='publicRoom' innTypes={value.innTypes.publicRoom} checkInnType={checkInnType} />다인실<br />
                {innDesc.publicRoom}
            </InnTypeDiv>
            <StyledResetButton name="reset" style={{ cursor: 'pointer' }} onClick={resetChecked}>
                삭제
            </StyledResetButton>
        </OptionTabStyle>
    )
}

const InnTypeDiv = styled.div`
    margin: 20px; 
`

const StyledResetButton = styled.button`
    display: inline-block;
    border-radius: 0%; 
    border: none;
    width: 60px; 
    height:40px;
    margin-left: 10px;
    margin-bottom: 10px;
    outline: none;
    font-size: 16px; 
`

export { InnType }; 
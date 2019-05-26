import React, { useContext } from 'react';
import styled from 'styled-components';
import OptionTabStyle from './OptionTabStyle';
import { OptionPanelSetContext } from '../../../Header';
import { ClosePanelContext } from '../../../../Main'
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { ApplyButtonStyle } from './DeleteApplyStyle';
import { DeleteButtonStyle } from './DeleteApplyStyle';
import Checkbox from '@material-ui/core/Checkbox';

const innDesc = {
    allhouse: "집 전체를 단독으로 사용합니다.",
    privateRoom: "침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다.",
    hotelRoom: "부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다.",
    publicRoom: "사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다."
}

const innTypeStates = {
    allhouse: false,
    privateRoom: false,
    hotelRoom: false,
    publicRoom: false
}

function InnType(props) {

    const contextValue = useContext(OptionPanelSetContext);
    const closePanelContextValue = useContext(ClosePanelContext);

    const checkboxStyle = {
        color : "#519D9E",
        padding: "5px 10px 5px 5px"
    };

    const checkInnType = (event) => {
        const name = event.target.name;
        const isChecked = event.target.checked;
        contextValue.dispatchInnTypes({type: 'check', payload: {name : name, isChecked: isChecked} });
        contextValue.toggleTabOnOff('innType', checkInnTypeStates(isChecked, name)); 
    };

    const checkInnTypeStates = (isChecked, name) => {
        innTypeStates[name] = isChecked; 
        if(Object.values(innTypeStates).includes(true)) { 
            contextValue.setIsPanelDeleteButtonActivated({...contextValue.isPanelDeleteButtonActivated, innType : true});
            return true; 
        } else { 
            contextValue.setIsPanelDeleteButtonActivated({...contextValue.isPanelDeleteButtonActivated, innType : false});
            return false; 
        };
    };

    const resetChecked = (event) => {
        event.stopPropagation();
        contextValue.dispatchInnTypes({type: 'reset'})
        resetInnTypeStates(); 
        contextValue.toggleTabOnOff('innType', false); 
        contextValue.setIsPanelDeleteButtonActivated({...contextValue.isPanelDeleteButtonActivated, innType : false});
    };

    const resetInnTypeStates = () => {
        for(let innType in innTypeStates) {
            innTypeStates[innType] = false; 
        };
    };

    const InnTypeCheck = (props) => {
        return (
            <Checkbox style ={checkboxStyle} name={props.name} checked={props.innTypes} onChange={props.checkInnType} />
        )
    };
 
    const applyInnType = (event) => {
        event.stopPropagation();
        closePanelContextValue.setSelectedTab('none'); 
    };

    return (
        <OptionTabStyle>
            <InnTypeDiv>
                <InnTypeCheck name='allhouse' innTypes={contextValue.innTypes.allhouse} checkInnType={checkInnType} />집 전체<br />
                <InnTypeDescStyle>{innDesc.allhouse}</InnTypeDescStyle>
            </InnTypeDiv>
            <InnTypeDiv>
                <InnTypeCheck name='privateRoom' innTypes={contextValue.innTypes.privateRoom} checkInnType={checkInnType} />개인실<br />
                <InnTypeDescStyle>{innDesc.privateRoom}</InnTypeDescStyle>
            </InnTypeDiv>
            <InnTypeDiv>
                <InnTypeCheck name='hotelRoom' innTypes={contextValue.innTypes.hotelRoom} checkInnType={checkInnType} />호텔 객실<br />
                <InnTypeDescStyle>{innDesc.hotelRoom}</InnTypeDescStyle>
            </InnTypeDiv>
            <InnTypeDiv>
                <InnTypeCheck name='publicRoom' innTypes={contextValue.innTypes.publicRoom} checkInnType={checkInnType} />다인실<br />
                <InnTypeDescStyle>{innDesc.publicRoom}</InnTypeDescStyle>
            </InnTypeDiv>
            <DeleteApplyStyle>
                <DeleteButtonStyle visible={contextValue.isPanelDeleteButtonActivated.innType} name="reset" style={{ cursor: 'pointer' }} onClick={resetChecked}>
                    { contextValue.isPanelDeleteButtonActivated.innType ? '삭제' : null }
                </DeleteButtonStyle>
                <ApplyButtonStyle onClick={applyInnType}>
                    적용
                </ApplyButtonStyle>
            </DeleteApplyStyle>
        </OptionTabStyle>
    );
};

const InnTypeDescStyle = styled.p`
    padding-left: 39px; 
    margin: 0px; 
`

const InnTypeDiv = styled.div`
    margin: 10px; 
`

export default InnType; 
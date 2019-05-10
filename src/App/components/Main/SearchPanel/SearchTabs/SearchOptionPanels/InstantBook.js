import React, {useContext} from 'react';
import { SearchOptionPanelContext } from '../SearchTabs';
import { OptionTabStyle } from './OptionTabStyle';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';

function InstantBook(props) {
    
    const value = useContext(SearchOptionPanelContext);

    const instantBookDesc = "호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소";

    const checked = false;
    
    const onOff = (event) => {
        checked = !checked;
        const name = event.target.value;        
        value.toggleTabOnOff(name, checked);
    }

    return (
        <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter}>
            <InsStyle>
                <div>즉시예약</div>
                <Switch style={OnOffSwitchStyle} onChange={onOff} value="instantBook" ></Switch>
            </InsStyle>
            <DescStyle>
                {instantBookDesc}
            </DescStyle>
            <DeleteApplyStyle> 
                <div>삭제</div>
                <div>적용</div>
            </DeleteApplyStyle> 
        </OptionTabStyle>
    )
}

const OnOffSwitchStyle = {
    color: 'green'
}

const InsStyle = styled.div`
    padding: 10px 0 0 10px; 
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 16px; 
`

const DescStyle = styled.p`
    padding: 0 0 0 10px;  
    font-size: 14px;
`

const DeleteApplyStyle = styled.div`
    padding: 10px;
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export { InstantBook };
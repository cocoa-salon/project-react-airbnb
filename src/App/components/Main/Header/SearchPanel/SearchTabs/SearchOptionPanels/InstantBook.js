import React, {useContext} from 'react';
import { OptionPanelSetContext } from '../../../Header';
import OptionTabStyle from './OptionTabStyle';
import styled from 'styled-components';
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { DeleteApplyButtonStyle } from './DeleteApplyStyle';
import Switch from '@material-ui/core/Switch';

function InstantBook(props) {
    
    const contextValue = useContext(OptionPanelSetContext);

    const instantBookDesc = "호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소";

    const toggleOnOff = (event) => {
        const isActivated = event.target.checked;
        contextValue.toggleInstantBookChecked(); 
        contextValue.toggleTabOnOff('instantBook', isActivated);
    }

    return (
        <OptionTabStyle>
            <InsStyle>
                <div>즉시예약</div>
                <Switch style={OnOffSwitchStyle} checked={contextValue.isInstantBookChecked.isChecked} onChange={toggleOnOff}/ >
            </InsStyle>
            <DescStyle>
                {instantBookDesc}
            </DescStyle>
            <DeleteApplyStyle> 
                <DeleteApplyButtonStyle>적용</DeleteApplyButtonStyle>
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

export default InstantBook;
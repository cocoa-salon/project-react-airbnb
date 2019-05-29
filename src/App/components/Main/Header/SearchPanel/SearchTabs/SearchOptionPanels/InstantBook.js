import React, {useContext} from 'react';
import { ClosePanelContext } from '../../../../Main'
import { OptionPanelSetContext } from '../../../Header';
import OptionTabStyle from './OptionTabStyle';
import styled from 'styled-components';
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { ApplyButtonStyle } from './DeleteApplyStyle';
import Switch from '@material-ui/core/Switch';


let queryToClear = "";

function InstantBook(props) {
    
    const contextValue = useContext(OptionPanelSetContext);
    const closePanelContextValue = useContext(ClosePanelContext);

    const instantBookDesc = "호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소";

    const toggleOnOff = (event) => {
        const isActivated = event.target.checked;
        contextValue.toggleInstantBookChecked(); 
        contextValue.toggleTabOnOff('instantBook', isActivated);
    }

    // 쿼리 생성(각 검색 옵션 패널마다 상이)
    const generateQueryString = () => {
        let queryString = "";
        const template = `&instantbook={{}}`
        let regExp = new RegExp('\{\{\}\}');
        let isChecked = contextValue.isInstantBookChecked.isChecked;
        queryString += template.replace(regExp, isChecked);
        return queryString;
    }

    const applyInstantBook = (event) => {
        event.stopPropagation();
        closePanelContextValue.setSelectedTab('none'); 

        closePanelContextValue.queryString.str = closePanelContextValue.queryString.str.replace(queryToClear, "");
        let generatedQuery = generateQueryString();
        queryToClear = generatedQuery;
        closePanelContextValue.queryString.str  += generatedQuery;
        closePanelContextValue.operateFetch(closePanelContextValue.queryString.str);
    };

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
                <ApplyButtonStyle onClick={applyInstantBook}>적용</ApplyButtonStyle>
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
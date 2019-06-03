import React, {useContext} from 'react';
import { ClosePanelContext } from '../../../../Main'
import { FetchQueryContext } from '../../../../Main'
import { OptionPanelSetContext } from '../../../Header';
import SearchOptionPanelStyle from './SearchOptionPanelStyle';
import styled from 'styled-components';
import { ClearApplyStyle } from './ClearApplyStyle';
import { ApplyButtonStyle } from './ClearApplyStyle';
import Switch from '@material-ui/core/Switch';


let queryToClear = "";

function InstantBook(props) {
    
    const optionPanelSetContext = useContext(OptionPanelSetContext);
    const closePanelContext = useContext(ClosePanelContext);
    const fetchQueryContext = useContext(FetchQueryContext);

    const instantBookDesc = "호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소";

    const toggleOnOff = (event) => {
        const isActivated = event.target.checked;
        optionPanelSetContext.toggleInstantBookChecked(); 
        optionPanelSetContext.toggleTabOnOff('instantBook', isActivated);
    }

    // 쿼리 생성(각 검색 옵션 패널마다 상이)
    const generateQueryString = () => {
        let queryString = "";
        const template = `&instantbook={{}}`
        let regExp = new RegExp('{{}}');
        let isChecked = optionPanelSetContext.isInstantBookChecked.isChecked;
        queryString += template.replace(regExp, isChecked);
        return queryString;
    }

    const applyInstantBook = (event) => {
        event.stopPropagation();
        closePanelContext.setIsPanelClosed(true);
        closePanelContext.clearDimmedSections();

        fetchQueryContext.queryString.str = fetchQueryContext.queryString.str.replace(queryToClear, "");
        let generatedQuery = generateQueryString();
        queryToClear = generatedQuery;
        fetchQueryContext.queryString.str  += generatedQuery;
        fetchQueryContext.operateFetchQuery(fetchQueryContext.queryString.str);
    };

    return (
        <SearchOptionPanelStyle>
            <InsStyle>
                <div>즉시예약</div>
                <Switch style={OnOffSwitchStyle} checked={optionPanelSetContext.isInstantBookChecked.isChecked} onChange={toggleOnOff}/>
            </InsStyle>
            <DescStyle>
                {instantBookDesc}
            </DescStyle>
            <ClearApplyStyle> 
                <ApplyButtonStyle onClick={applyInstantBook}>적용</ApplyButtonStyle>
            </ClearApplyStyle> 
        </SearchOptionPanelStyle>
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
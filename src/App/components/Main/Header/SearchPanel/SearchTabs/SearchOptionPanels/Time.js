import React, { useContext } from 'react';
import SearchOptionPanelStyle from './SearchOptionPanelStyle';
import { ClosePanelContext } from '../../../../Main'

function Time(props) {

    const closePanelContext = useContext(ClosePanelContext);

    const applyTime = (event) => {
        event.stopPropagation();
        closePanelContext.clearDimmedSections();
        closePanelContext.setIsPanelClosed(true);
        
    };

    return (
        <SearchOptionPanelStyle>
            시간대를 설정하는 옵션 패널
        </SearchOptionPanelStyle>
    )
}

export default Time;
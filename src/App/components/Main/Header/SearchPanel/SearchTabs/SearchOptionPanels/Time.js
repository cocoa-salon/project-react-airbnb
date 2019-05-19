import React, { useContext } from 'react';
import OptionTabStyle from './OptionTabStyle';
import { ClosePanelContext } from '../../../../Main'

function Time(props) {

    const closePanelContextValue = useContext(ClosePanelContext);

    const applyTime = (event) => {
        event.stopPropagation();
        closePanelContextValue.setSelectedTab('none'); 
    };

    return (
        <OptionTabStyle>
            시간대를 설정하는 옵션 패널
        </OptionTabStyle>
    )
}

export default Time;
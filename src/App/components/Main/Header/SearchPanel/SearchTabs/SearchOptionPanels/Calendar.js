import React, { useContext } from 'react';
import OptionTabStyle from './OptionTabStyle';
import { ClosePanelContext } from '../../../../Main'
import { OptionPanelSetContext } from '../../../Header';
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { DeleteApplyButtonStyle } from './DeleteApplyStyle';

function Calendar(props) {

    const closePanelContextValue = useContext(ClosePanelContext);
    const contextValue = useContext(OptionPanelSetContext);

    const resetCalendar = (event) => {
        event.stopPropagation();
        contextValue.setIsPanelDeleteButtonActivated(false);
    };

    const applyCalendar = (event) => {
        event.stopPropagation();
        closePanelContextValue.setSelectedTab('none'); 
    };

    return (
        <OptionTabStyle>
            달력, 기간을 설정하는 옵션 패널
            <DeleteApplyStyle>
                <DeleteApplyButtonStyle onClick={resetCalendar}>
                    { contextValue.isPanelDeleteButtonActivated ? '삭제' : null }   
                </DeleteApplyButtonStyle>
                <DeleteApplyButtonStyle onClick={applyCalendar}>
                    적용
                </DeleteApplyButtonStyle>
            </DeleteApplyStyle>
        </OptionTabStyle>
    )
}

export default Calendar;
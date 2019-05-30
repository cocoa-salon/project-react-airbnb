import React, { useContext, useEffect, useState } from 'react';
import OptionTabStyle from './OptionTabStyle';
import { ClosePanelContext } from '../../../../Main'
import { OptionPanelSetContext } from '../../../Header';
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { ApplyButtonStyle } from './DeleteApplyStyle';
import { DeleteButtonStyle } from './DeleteApplyStyle';

function Dates(props) {

    const closePanelContextValue = useContext(ClosePanelContext);
    const contextValue = useContext(OptionPanelSetContext);

    const resetDates = (event) => {
        event.stopPropagation();
        contextValue.setIsPanelDeleteButtonActivated(false);
    };

    const applyDates = (event) => {
        event.stopPropagation();
        closePanelContextValue.setSelectedTab('none');
    };

    return (
        <OptionTabStyle>
            달력, 기간을 설정하는 옵션 패널
            <DeleteApplyStyle>
                <DeleteButtonStyle visible={contextValue.isPanelDeleteButtonActivated.date} onClick={resetDates}>
                    {contextValue.isPanelDeleteButtonActivated ? '삭제' : null}
                </DeleteButtonStyle>
                <ApplyButtonStyle onClick={applyDates}>
                    적용
                </ApplyButtonStyle>
            </DeleteApplyStyle>
        </OptionTabStyle>
    )
}

export default Dates;
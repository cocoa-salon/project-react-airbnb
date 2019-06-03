import React, { useContext } from 'react';
import SearchOptionPanelStyle from './SearchOptionPanelStyle';
import { ClosePanelContext } from '../../../../Main'
import { OptionPanelSetContext } from '../../../Header';
import { ClearApplyStyle } from './ClearApplyStyle';
import { ApplyButtonStyle } from './ClearApplyStyle';
import { ClearButtonStyle } from './ClearApplyStyle';

function Dates(props) {

    const closePanelContext = useContext(ClosePanelContext);
    const contextValue = useContext(OptionPanelSetContext);

    const clearDates = (event) => {
        event.stopPropagation();
        contextValue.setIsPanelClearButtonActivated(false);
    };

    const applyDates = (event) => {
        event.stopPropagation();
        closePanelContext.setIsPanelClosed(true);
        closePanelContext.clearDimmedSections();
    };

    return (
        <SearchOptionPanelStyle>
            달력, 기간을 설정하는 옵션 패널
            <ClearApplyStyle>
                <ClearButtonStyle visible={contextValue.isPanelClearButtonActivated.date} onClick={clearDates}>
                    {contextValue.isPanelClearButtonActivated ? '삭제' : null}
                </ClearButtonStyle>
                <ApplyButtonStyle onClick={applyDates}>
                    적용
                </ApplyButtonStyle>
            </ClearApplyStyle>
        </SearchOptionPanelStyle>
    )
}

export default Dates;
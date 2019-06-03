import React, { useContext } from 'react';
import SearchOptionPanelStyle from './SearchOptionPanelStyle';
import { ClosePanelContext } from '../../../../Main'
import { OptionPanelSetContext } from '../../../Header';
import { ClearApplyStyle } from './ClearApplyStyle';
import { ApplyButtonStyle } from './ClearApplyStyle';
import { ClearButtonStyle } from './ClearApplyStyle';

function MoreFilters(props) {

    const closePanelContext = useContext(ClosePanelContext);
    const contextValue = useContext(OptionPanelSetContext);


    const clearAddFilters = (event) => {
        event.stopPropagation();
        contextValue.setIsPanelClearButtonActivated({...contextValue.isPanelClearButtonActivated, filterAdd : false});
    };

    const applyAddFilters = (event) => {
        event.stopPropagation();
        closePanelContext.setIsPanelClosed(true);
        closePanelContext.clearDimmedSections();
    };

    return (
        <SearchOptionPanelStyle>
            필터를 추가하는 옵션 패널
            <ClearApplyStyle>
                <ClearButtonStyle visible={contextValue.isPanelClearButtonActivated.filterAdd} onClick={clearAddFilters}>
                    { contextValue.isPanelClearButtonActivated.filterAdd ? '삭제' : null }
                </ClearButtonStyle>
                <ApplyButtonStyle onClick={applyAddFilters}>
                    적용
                </ApplyButtonStyle>
            </ClearApplyStyle>
        </SearchOptionPanelStyle>
    )
}

export default MoreFilters;
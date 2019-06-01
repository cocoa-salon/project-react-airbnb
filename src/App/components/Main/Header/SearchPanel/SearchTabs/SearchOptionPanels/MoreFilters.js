import React, { useContext } from 'react';
import SearchOptionPanelStyle from './SearchOptionPanelStyle';
import { ClosePanelContext } from '../../../../Main'
import { OptionPanelSetContext } from '../../../Header';
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { ApplyButtonStyle } from './DeleteApplyStyle';
import { DeleteButtonStyle } from './DeleteApplyStyle';

function MoreFilters(props) {

    const closePanelContext = useContext(ClosePanelContext);
    const contextValue = useContext(OptionPanelSetContext);


    const resetAddFilters = (event) => {
        event.stopPropagation();
        contextValue.setIsPanelDeleteButtonActivated({...contextValue.isPanelDeleteButtonActivated, filterAdd : false});
    };

    const applyAddFilters = (event) => {
        event.stopPropagation();
        closePanelContext.setIsSearchOptionPanelsActivated({
            ...closePanelContext.isSearchOptionPanelsActivated, moreFilters: false
        });
        closePanelContext.clearDimmedSections();
    };

    return (
        <SearchOptionPanelStyle>
            필터를 추가하는 옵션 패널
            <DeleteApplyStyle>
                <DeleteButtonStyle visible={contextValue.isPanelDeleteButtonActivated.filterAdd} onClick={resetAddFilters}>
                    { contextValue.isPanelDeleteButtonActivated.filterAdd ? '삭제' : null }
                </DeleteButtonStyle>
                <ApplyButtonStyle onClick={applyAddFilters}>
                    적용
                </ApplyButtonStyle>
            </DeleteApplyStyle>
        </SearchOptionPanelStyle>
    )
}

export default MoreFilters;
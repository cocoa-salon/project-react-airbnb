import React, { useContext } from 'react';
import OptionTabStyle from './OptionTabStyle';
import { ClosePanelContext } from '../../../../Main'
import { OptionPanelSetContext } from '../../../Header';
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { ApplyButtonStyle } from './DeleteApplyStyle';
import { DeleteButtonStyle } from './DeleteApplyStyle';

function AddFilters(props) {

    const closePanelContextValue = useContext(ClosePanelContext);
    const contextValue = useContext(OptionPanelSetContext);


    const resetAddFilters = (event) => {
        event.stopPropagation();
        contextValue.setIsPanelDeleteButtonActivated({...contextValue.isPanelDeleteButtonActivated, filterAdd : false});
    };

    const applyAddFilters = (event) => {
        event.stopPropagation();
        closePanelContextValue.setSelectedTab('none');
    };

    return (
        <OptionTabStyle>
            필터를 추가하는 옵션 패널
            <DeleteApplyStyle>
                <DeleteButtonStyle visible={contextValue.isPanelDeleteButtonActivated.filterAdd} onClick={resetAddFilters}>
                    { contextValue.isPanelDeleteButtonActivated.filterAdd ? '삭제' : null }
                </DeleteButtonStyle>
                <ApplyButtonStyle onClick={applyAddFilters}>
                    적용
                </ApplyButtonStyle>
            </DeleteApplyStyle>
        </OptionTabStyle>
    )
}

export default AddFilters;
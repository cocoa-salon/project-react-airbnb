import React, {useContext} from 'react';
import { OptionTabStyle } from './OptionTabStyle';
import { ClosePanelContext } from '../../../Main.js';

function AddFilters(props) {

    const value = useContext(ClosePanelContext);

    return (
        <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter}>
            필터를 추가하는 옵션 패널
        </OptionTabStyle>
    )
}

export { AddFilters };
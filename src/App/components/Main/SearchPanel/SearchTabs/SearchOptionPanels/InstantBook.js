import React, {useContext} from 'react';
import { SearchOptionPanelContext } from '../SearchTabs';
import { OptionTabStyle } from './OptionTabStyle';;

function InstantBook(props) {
    
    const value = useContext(SearchOptionPanelContext);

    return (
        <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter}>
            즉시예약을 설정하는 옵션 패널
        </OptionTabStyle>
    )
}

export { InstantBook };
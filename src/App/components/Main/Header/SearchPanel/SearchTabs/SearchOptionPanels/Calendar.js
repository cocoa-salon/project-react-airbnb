import React, { useContext, useEffect, useState } from 'react';
import OptionTabStyle from './OptionTabStyle';
import { ClosePanelContext } from '../../../../Main'
import { OptionPanelSetContext } from '../../../Header';
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { ApplyButtonStyle } from './DeleteApplyStyle';
import { DeleteButtonStyle } from './DeleteApplyStyle';

function Calendar(props) {

    const [ text, setText] = useState("");

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

    useEffect(()=> {
        fetch('http://localhost:8080/search/allInfo')
          .then((response) => response.json())
          .then((response) => { 
              setText(response[0].name);
          })
    }, []);

    return (
        <OptionTabStyle>
            달력, 기간을 설정하는 옵션 패널
            <DeleteApplyStyle>
                <div>{text}</div>
                <DeleteButtonStyle visible={contextValue.isPanelDeleteButtonActivated.date} onClick={resetCalendar}>
                    {contextValue.isPanelDeleteButtonActivated ? '삭제' : null}
                </DeleteButtonStyle>
                <ApplyButtonStyle onClick={applyCalendar}>
                    적용
                </ApplyButtonStyle>
            </DeleteApplyStyle>
        </OptionTabStyle>
    )
}

export default Calendar;
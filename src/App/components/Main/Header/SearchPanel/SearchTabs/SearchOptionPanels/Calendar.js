import React from 'react';
import OptionTabStyle from './OptionTabStyle';
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { DeleteApplyButtonStyle } from './DeleteApplyStyle';

function Calendar(props) {

    return (
        <OptionTabStyle>
            달력, 기간을 설정하는 옵션 패널
            <DeleteApplyStyle>
                <DeleteApplyButtonStyle>
                    삭제
                </DeleteApplyButtonStyle>
                <DeleteApplyButtonStyle>
                    적용
                </DeleteApplyButtonStyle>
            </DeleteApplyStyle>
        </OptionTabStyle>
    )
}

export default Calendar;
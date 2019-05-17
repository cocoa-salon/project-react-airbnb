import React from 'react';
import OptionTabStyle from './OptionTabStyle';
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { DeleteApplyButtonStyle } from './DeleteApplyStyle';

function AddFilters(props) {

    return (
        <OptionTabStyle>
            필터를 추가하는 옵션 패널
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

export default AddFilters;
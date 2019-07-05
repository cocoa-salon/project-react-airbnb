import React, { useContext, useState, useRef } from 'react';
import SearchOptionPanelStyle from './SearchOptionPanelStyle';
import { ClosePanelContext } from '../../../../Main'
import { OptionPanelSetContext } from '../../../Header';
import { ClearApplyStyle } from './ClearApplyStyle';
import { ApplyButtonStyle } from './ClearApplyStyle';
import { ClearButtonStyle } from './ClearApplyStyle';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import 'moment/locale/ko';

function Dates(props) {

    const refInput = useRef(null);

    const closePanelContext = useContext(ClosePanelContext);
    const contextValue = useContext(OptionPanelSetContext);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState("startDate");

    const handleDate = ({startDate, endDate}) => {
        setStartDate(startDate);
        setEndDate(endDate);
    }

    const handleFocus = (focusedInput) => {
        setFocusedInput(focusedInput || "startDate");
    }

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
        <DayPickerRangeController
                ref={refInput}
                startDate={startDate} // momentPropTypes.momentObj or null,
                endDate={endDate} // momentPropTypes.momentObj or null,
                onDatesChange={handleDate} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={handleFocus} // PropTypes.func.isRequired,
                initialVisibleMonth={() => moment().add(2, "M")}
                numberOfMonths={2}
            /> 
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
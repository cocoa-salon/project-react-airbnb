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

let queryToClear = "";

function Dates(props) {

    const closePanelContext = useContext(ClosePanelContext);
    const contextValue = useContext(OptionPanelSetContext);

    const handleDate = ({ startDate, endDate }) => {
        generateQueryString(startDate, endDate);
        contextValue.setCheckIn(startDate);
        contextValue.setCheckOut(endDate);
    };

    const generateQueryString = (startDate, endDate) => {
        const checkInDate = startDate.format('YYYY-MM-DD');
        let checkOutDate = "checkout";
        if (endDate) {
            checkOutDate = endDate.format('YYYY-MM-DD')
        };

        let queryString = "";
        const template = `&checkin={{checkIn}}&checkout={{checkOut}}`;
        let regCheckIn = new RegExp('{{checkIn}}');
        let regCheckOut = new RegExp('{{checkOut}}');
        queryString = template.replace(regCheckIn, checkInDate).replace(regCheckOut, checkOutDate);
        console.log(queryString);

        return queryString;
    };

    const handleFocus = (focusedInput) => {
        contextValue.setFocusedInput(focusedInput || "startDate");
    };

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
                startDate={contextValue.checkIn} // momentPropTypes.momentObj or null,
                endDate={contextValue.checkOut} // momentPropTypes.momentObj or null,
                onDatesChange={handleDate} // PropTypes.func.isRequired,
                focusedInput={contextValue.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
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
    );
}

export default Dates;
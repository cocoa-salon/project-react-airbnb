import React, { useContext, useState, useRef } from 'react';
import styled from 'styled-components';
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
    const optionPanelSetContext = useContext(OptionPanelSetContext);

    const handleDate = ({ startDate, endDate }) => {
        generateQueryString(startDate, endDate);
        optionPanelSetContext.setCheckIn(startDate);
        optionPanelSetContext.setCheckOut(endDate);
        optionPanelSetContext.toggleTabOnOff('dates', true);
        if (startDate && endDate) {
            optionPanelSetContext.setIsPanelClearButtonActivated({
                ...optionPanelSetContext.isPanelClearButtonActivated, dates: true
            });
        }
    };

    const generateQueryString = (startDate, endDate) => {
        let checkInDate = "checkin";
        let checkOutDate = "checkout";
        if (startDate) checkInDate = startDate.format('YYYY-MM-DD');
        if (endDate) checkOutDate = endDate.format('YYYY-MM-DD');

        let queryString = "";
        const template = `&checkin={{checkIn}}&checkout={{checkOut}}`;
        let regCheckIn = new RegExp('{{checkIn}}');
        let regCheckOut = new RegExp('{{checkOut}}');
        queryString = template.replace(regCheckIn, checkInDate).replace(regCheckOut, checkOutDate);
        console.log(queryString);

        return queryString;
    };

    const handleFocus = (focusedInput) => {
        optionPanelSetContext.setFocusedInput(focusedInput || "startDate");
    };

    const clearDates = (event) => {
        event.stopPropagation();
        optionPanelSetContext.setCheckIn(null);
        optionPanelSetContext.setCheckOut(null);
        optionPanelSetContext.toggleTabOnOff('dates', false);
        optionPanelSetContext.setIsPanelClearButtonActivated({
            ...optionPanelSetContext.isPanelClearButtonActivated, dates: false
        });
    };

    const applyDates = (event) => {
        event.stopPropagation();
        closePanelContext.setIsPanelClosed(true);
        closePanelContext.clearDimmedSections();
    };

    const SearchOptionPanelDatesStyle = styled(SearchOptionPanelStyle)`
        width: 620px;
    `

    return (
        <SearchOptionPanelStyle>
            <DayPickerRangeController
                startDate={optionPanelSetContext.checkIn} // momentPropTypes.momentObj or null,
                endDate={optionPanelSetContext.checkOut} // momentPropTypes.momentObj or null,
                onDatesChange={handleDate} // PropTypes.func.isRequired,
                focusedInput={optionPanelSetContext.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={handleFocus} // PropTypes.func.isRequired,
                initialVisibleMonth={() => moment().add(2, "M")}
                numberOfMonths={2}
            />
            <ClearApplyStyle>
                <ClearButtonStyle visible={optionPanelSetContext.isPanelClearButtonActivated.dates} onClick={clearDates}>
                    {optionPanelSetContext.isPanelClearButtonActivated ? '삭제' : null}
                </ClearButtonStyle>
                <ApplyButtonStyle onClick={applyDates}>
                    적용
                </ApplyButtonStyle>
            </ClearApplyStyle>
        </SearchOptionPanelStyle>
    );
}

export default Dates;
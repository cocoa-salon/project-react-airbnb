import React, { useContext, useState, useRef } from 'react';
import styled from 'styled-components';
import SearchOptionPanelStyle from './SearchOptionPanelStyle';
import { ClosePanelContext } from '../../../../Main'
import { OptionPanelSetContext } from '../../../Header';
import { ClearApplyStyle } from './ClearApplyStyle';
import { ApplyButtonStyle } from './ClearApplyStyle';
import { ClearButtonStyle } from './ClearApplyStyle';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/ko';

let queryToClear = "";

const SearchOptionPanelDatesStyle = styled(SearchOptionPanelStyle)`
    width: 620px;
`;

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

    return (
        <SearchOptionPanelDatesStyle>
            <DayPickerRangeController
                startDate={optionPanelSetContext.checkIn} // momentPropTypes.momentObj or null,
                endDate={optionPanelSetContext.checkOut} // momentPropTypes.momentObj or null,
                onDatesChange={handleDate} // PropTypes.func.isRequired,
                focusedInput={optionPanelSetContext.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={handleFocus} // PropTypes.func.isRequired,
                numberOfMonths={2}
                noBorder={true}
            />
            <ClearApplyStyle>
                <ClearButtonStyle visible={optionPanelSetContext.isPanelClearButtonActivated.dates} onClick={clearDates}>
                    {optionPanelSetContext.isPanelClearButtonActivated ? '삭제' : null}
                </ClearButtonStyle>
                <ApplyButtonStyle onClick={applyDates}>
                    적용
                </ApplyButtonStyle>
            </ClearApplyStyle>
        </SearchOptionPanelDatesStyle>
    );
}

export default Dates;
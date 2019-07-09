import React, { useContext } from 'react';
import { OptionPanelSetContext } from '../../../../Header';

const DatesTapDisplay = (props) => {
    
    const contextValue = useContext(OptionPanelSetContext);
    let checkInDate = "";
    let checkOutDate = "";
    if(contextValue.checkIn) checkInDate = contextValue.checkIn.format('MMM Do');
    if(contextValue.checkOut) checkOutDate = contextValue.checkOut.format('MMM Do');

    return (
        !checkInDate && !checkOutDate ? <span>날짜</span> :
        checkInDate && !checkOutDate ?
        <span>{checkInDate} - 체크아웃</span> :
        <span>{checkInDate} - {checkOutDate}</span>
    );
}

export default DatesTapDisplay; 
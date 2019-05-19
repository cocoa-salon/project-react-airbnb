import React, {useContext} from 'react';
import { OptionPanelSetContext } from '../../../../Header';


const GuestTapDisplay = () => {
    
    const contextValue = useContext(OptionPanelSetContext);

    return (
        <div>
            {contextValue.guestNum.totalNum === 0 ? '인원' : contextValue.guestNum.totalNum > 0 ? `게스트 ${contextValue.guestNum.totalNum}` : ''}
            {contextValue.guestNum.toddlerNum > 0 ? `유아 ${contextValue.guestNum.toddlerNum}` : ''}
        </div>
    )
}

export default GuestTapDisplay;
import React, {useContext} from 'react';
import { OptionPanelSetContext } from '../../../../Header';


const GuestsTapDisplay = () => {
    
    const contextValue = useContext(OptionPanelSetContext);

    return (
        <div>
            {contextValue.guestsNum.totalNum === 0 ? '인원' : contextValue.guestsNum.totalNum > 0 ? `게스트 ${contextValue.guestsNum.totalNum}` : ''}
            {contextValue.guestsNum.infantsNum > 0 ? `유아 ${contextValue.guestsNum.infantsNum}` : ''}
        </div>
    )
}

export default GuestsTapDisplay;
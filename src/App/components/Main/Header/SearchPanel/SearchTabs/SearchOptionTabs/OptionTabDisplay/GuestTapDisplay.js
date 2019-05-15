import React, {useContext} from 'react';
import { OptionPanelSetContext } from '../../../../Header';


const GuestTapDisplay = () => {
    
    const contextValue = useContext(OptionPanelSetContext);

    return (
        <div>
            {contextValue.totalNum === 0 ? '인원' : contextValue.totalNum > 0 ? `게스트 ${contextValue.totalNum}` : ''}
            {contextValue.toddlerNum > 0 ? `유아 ${contextValue.toddlerNum}` : ''}
        </div>
    )
}

export default GuestTapDisplay;
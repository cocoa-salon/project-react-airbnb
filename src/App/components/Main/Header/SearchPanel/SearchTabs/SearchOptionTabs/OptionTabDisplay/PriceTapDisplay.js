import React, {useContext} from 'react';
import { OptionPanelSetContext } from '../../../../Header';

const PriceTapDisplay = (props) => {
    const value = useContext(OptionPanelSetContext);

    return (
        <span>{value.price.tabMsg}</span>
    );
}

export default PriceTapDisplay;
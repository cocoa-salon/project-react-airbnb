import React, { useContext } from 'react';

import { OptionPanelSetContext } from '../../../Header';

import styled from 'styled-components';
import OptionTabStyle from './OptionTabStyle';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider, { Range } from 'rc-slider';

const WrapperStyle = styled.div`
    width: 300px; 
    padding: 10px; 
`

const wrapperStyle = {
    width: 300,
    margin: 50
};


function Price(props) {

    const value = useContext(OptionPanelSetContext); 

    const price = value.price; 


    const handleOnChange = (event) => {
        value.handleChange(event);
    }

    const handleOnChangeMin = (event) => {
        value.handleChangeMin(event);
    }

    const handleOnChangeMax = (event) => {
        value.handleChangeMax(event);
    }

    return (
        <OptionTabStyle>
            가격대를 설정하는 옵션 패널
            <div style={wrapperStyle}>
                <Range
                    onChange={handleOnChange}
                    pushable={false}
                    allowCross={false}
                    min={price.defaultMin}
                    max={price.defaultMax}
                    defaultValue={[price.defaultMin, price.defaultMax]}
                    marks={{ [price.defaultMin]: price.defaultMin, [price.defaultMax]: price.defaultMax }}
                    step={1}
                />
            </div>
            <div>
                최소금액: <input name="priceMin"type="text" value={price.min} onChange={handleOnChangeMin}/>원
            </div>
            <div>
                최대금액: <input name="priceMax"type="text" value={price.max} onChange={handleOnChangeMax}/>원
            </div>

        </OptionTabStyle>
    )
}

export default Price;
import React, { useContext } from 'react';

import { OptionPanelSetContext } from '../../../Header';
import styled from 'styled-components';
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { DeleteApplyButtonStyle } from './DeleteApplyStyle';
import OptionTabStyle from './OptionTabStyle';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider, { Range } from 'rc-slider';


const PriceOptionTabStyle = styled(OptionTabStyle)`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `

const SliderStyle = styled.div`
        width: 350px;
        padding: 20px;
    `

const PriceInputContainerStyle = styled.div`
        width: 350px; 
        height: 60px; 
        margin: 10px 20px 20px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    `

const PriceInputStyle = styled.div`
        padding: 5px;
        width: 140px; 
        height: 30px;
        border: rgb(230,230,230) solid 1px; 
        border-radius: 4px; 
        line-height: 30px;
    `

const PriceInputFieldStyle = styled.input`
        margin-left: 10px;
        width: 110px;
        height: 20px;
        font-size: 20px; 
        border : none;
        outline: none;  
    `

const CurrencyStyle = styled.span`
        font-size: 16px;
        font-weight: bold; 
    `

function Price(props) {

    const priceContext = useContext(OptionPanelSetContext);

    const price = priceContext.price;

    const handleOnChange = (event) => {
        priceContext.handleChange(event);
    };

    const handleOnChangeInput = (event) => {
        const name = event.target.name;
        const value = Number(event.target.value);
        if(name === "priceMin") handleOnChangeMin(value);
        else if(name === "priceMax" ) handleOnChangeMax(value);
    };

    const handleOnChangeMin = (value) => {
        if (value >= price.max || isNaN(value)) return;
        priceContext.handleChangeMin(value);
    };

    const handleOnChangeMax = (value) => {
        if (value > price.defaultMax || isNaN(value)) return;
        priceContext.handleChangeMax(value);
    };

    const priceCheck = () => {
        if(price.min === 12000 && price.max === 1000000) {
            priceContext.toggleTabOnOff("price", false);
            priceContext.setPrice({...price, tabMsg: '가격'});
        } else if (price.min !== 12000 && price.max !== 1000000) {
            priceContext.toggleTabOnOff("price", true);
            priceContext.setPrice({...price, tabMsg: `\u{FFE6} ${price.min}- \u{FFE6} ${price.max}`});
        } else if(price.min === 12000) {
            priceContext.toggleTabOnOff("price", true);
            priceContext.setPrice({...price, tabMsg: `최대 \u{FFE6} ${price.max}`});
        } else if(price.max === 1000000) {
            priceContext.toggleTabOnOff("price", true);
            priceContext.setPrice({...price, tabMsg: `\u{FFE6} ${price.min} +`});
        } 
    };

    return (
        <PriceOptionTabStyle>
            <SliderStyle>
                <Range
                    onChange={handleOnChange}
                    pushable={false}
                    allowCross={false}
                    min={price.defaultMin}
                    max={price.defaultMax}
                    defaultValue={[price.min, price.max]}
                    value={[price.min, price.max]}
                    step={1000}
                />
            </SliderStyle>
            <PriceInputContainerStyle>
                <PriceInputStyle>
                    <CurrencyStyle>&#8361;</CurrencyStyle>&nbsp;
                    <PriceInputFieldStyle name="priceMin" type="text" value={price.min} onChange={handleOnChangeInput} />
                </PriceInputStyle>
                -
                <PriceInputStyle>
                    <CurrencyStyle>&#8361;</CurrencyStyle>&nbsp;
                    <PriceInputFieldStyle name="priceMax" type="text" value={price.max} onChange={handleOnChangeInput} />
                </PriceInputStyle>
            </PriceInputContainerStyle>
            <DeleteApplyStyle>
                <DeleteApplyButtonStyle name="reset" onClick={priceContext.resetChecked}>
                    삭제
                </DeleteApplyButtonStyle>
                <DeleteApplyButtonStyle onClick={priceCheck}>
                    적용
                </DeleteApplyButtonStyle>
            </DeleteApplyStyle>
        </PriceOptionTabStyle>
    )
}

export default Price;
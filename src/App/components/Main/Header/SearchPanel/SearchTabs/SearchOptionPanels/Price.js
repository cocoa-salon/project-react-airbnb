import React, { useContext, useRef } from 'react';
import { OptionPanelSetContext } from '../../../Header';
import { ClosePanelContext } from '../../../../Main'
import styled from 'styled-components';
import { DeleteApplyStyle } from './DeleteApplyStyle';
import { DeleteApplyButtonStyle } from './DeleteApplyStyle';
import OptionTabStyle from './OptionTabStyle';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { Range } from 'rc-slider';


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

    const refMin = useRef(null);
    const refMax = useRef(null);
    const refSlider = useRef(null);

    const priceContext = useContext(OptionPanelSetContext);
    const closePanelContextValue = useContext(ClosePanelContext);

    const price = priceContext.price;

    const handleOnChange = (event) => {
        refMin.current.value = event[0];
        refMax.current.value = event[1];
        refSlider.current.state.bounds[0] = event[0];
        refSlider.current.state.bounds[1] = event[1];
    };

    const handleOnAfterChange = (event) => {
        const minValue = event[0];
        const maxValue = event[1];
        priceContext.dispatchSetPrice({type: "setPrices", payload: {minValue: minValue, maxValue: maxValue}});
        if(minValue === price.defaultMin && maxValue === price.defaultMax) {
            priceContext.setIsPanelDeleteButtonActivated({...priceContext.isPanelDeleteButtonActivated, price : false});
        } else priceContext.setIsPanelDeleteButtonActivated({...priceContext.isPanelDeleteButtonActivated, price : true});
    };

    function numberFormat(inputNumber) {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleOnChangeInput = (event) => {
        const name = event.target.name;
        const value = Number(event.target.value);
        if(name === "priceMin") setPriceMin(value);
        else if(name === "priceMax" ) setPriceMax(value);
    };

    const setPriceMin = (value) => {
        if (value >= price.max || isNaN(value)) return;
        priceContext.dispatchSetPrice({type: "setPriceMin", payload: { minValue: value }});
    };

    const setPriceMax = (value) => {
        if (value > price.defaultMax || isNaN(value)) return;
        priceContext.dispatchSetPrice({type: "setPriceMax", payload: { maxValue: value }});
    };

    const tabMsgs = {
        priceDefault : '가격',
        prices : `\u{FFE6} ${price.min}- \u{FFE6} ${price.max}`,
        priceMin : `최대 \u{FFE6} ${price.max}`,
        priceMax : `\u{FFE6} ${price.min} +`
    };

    const { priceDefault, prices, priceMin, priceMax } = tabMsgs;

    const setOptionTabState = (event) => {
        event.stopPropagation();
        closePanelContextValue.setSelectedTab('none'); 
        if(price.min === price.defaultMin && price.max === price.defaultMax) {
            priceContext.toggleTabOnOff("price", false);
            priceContext.dispatchSetPrice({type: "setTabState", payload: { tabMsg : priceDefault}});
            return; 
        } else if (price.min !== price.defaultMin && price.max !== price.defaultMax) {
            priceContext.dispatchSetPrice({type: "setTabState", payload: { tabMsg : prices}});
        } else if(price.min === price.defaultMin) {
            priceContext.dispatchSetPrice({type: "setTabState", payload: { tabMsg: priceMin}});
        } else if(price.max === price.defaultMax) {
            priceContext.dispatchSetPrice({type: "setTabState", payload: { tabMsg: priceMax}});
        } 
        priceContext.toggleTabOnOff("price", true);
    };

    const resetPrice = (event) => {
        event.stopPropagation();
        priceContext.toggleTabOnOff("price", false);
        priceContext.dispatchSetPrice({type: 'reset'});
        priceContext.setIsPanelDeleteButtonActivated({...priceContext.isPanelDeleteButtonActivated, price : false});
    };

    return (
        <PriceOptionTabStyle>
            <SliderStyle>
                <Range
                    ref={refSlider}
                    onChange={handleOnChange}
                    onAfterChange={handleOnAfterChange}
                    pushable={false}
                    allowCross={false}
                    min={price.defaultMin}
                    max={price.defaultMax}
                    defaultValue={[price.defaultMin, price.defaultMax]}
                    value={[price.min, price.max]}
                    step={1000}
                />
            </SliderStyle>
            <PriceInputContainerStyle>
                <PriceInputStyle>
                    <CurrencyStyle>&#8361;</CurrencyStyle>&nbsp;
                    <PriceInputFieldStyle ref={refMin} name="priceMin" type="text" value={price.min} onChange={handleOnChangeInput} />
                </PriceInputStyle>
                -
                <PriceInputStyle>
                    <CurrencyStyle>&#8361;</CurrencyStyle>&nbsp;
                    <PriceInputFieldStyle ref={refMax} name="priceMax" type="text" value={price.max} onChange={handleOnChangeInput} />
                </PriceInputStyle>
            </PriceInputContainerStyle>
            <DeleteApplyStyle>
                <DeleteApplyButtonStyle name="reset" onClick={resetPrice}>
                    { priceContext.isPanelDeleteButtonActivated.price ? '삭제' : null }
                </DeleteApplyButtonStyle>
                <DeleteApplyButtonStyle onClick={setOptionTabState}>
                    적용
                </DeleteApplyButtonStyle>
            </DeleteApplyStyle>
        </PriceOptionTabStyle>
    );
};

export default Price;
import React, { useContext, useRef } from 'react';
import { OptionPanelSetContext } from '../../../Header';
import { ClosePanelContext } from '../../../../Main'
import { FetchQueryContext } from '../../../../Main'
import styled from 'styled-components';
import { ClearApplyStyle } from './ClearApplyStyle';
import { ApplyButtonStyle } from './ClearApplyStyle';
import { ClearButtonStyle } from './ClearApplyStyle';
import SearchOptionPanelStyle from './SearchOptionPanelStyle';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { Range } from 'rc-slider';
import { nextItemsIdxDefault } from '../../../../../../setting_values/setting_values'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const PriceOptionPanelStyle = styled(SearchOptionPanelStyle)`
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

let queryToClear = "";

const data = [
    { quarter: 1, earnings: 10 },
    { quarter: 2, earnings: 3 },
    { quarter: 3, earnings: 9 },
    { quarter: 4, earnings: 2 },
    { quarter: 5, earnings: 7 },
    { quarter: 6, earnings: 5 },
    { quarter: 7, earnings: 2 },
    { quarter: 8, earnings: 1 }
];

const Price = (props) => {

    const optionPanelSetContext = useContext(OptionPanelSetContext);
    const closePanelContext = useContext(ClosePanelContext);
    const fetchQueryContext = useContext(FetchQueryContext);

    const price = optionPanelSetContext.price;

    const refMin = useRef(null);
    const refMax = useRef(null);
    const refSlider = useRef(null);

    // 가격에 콤마 추가
    const attachComma = (number) =>
        number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // 슬라이더 막대 이동시 이벤트 처리
    const handleOnChange = (event) => {
        refMin.current.value = event[0];
        refMax.current.value = event[1];
        refSlider.current.state.bounds[0] = event[0];
        refSlider.current.state.bounds[1] = event[1];
    };

    // 슬라이더 막대 이동 완료 시 이벤트 처리(가격 상태 업데이트)
    const handleOnAfterChange = (event) => {
        const minValue = event[0];
        const maxValue = event[1];
        optionPanelSetContext.dispatchSetPrice({ type: "setPrices", payload: { minValue: minValue, maxValue: maxValue } });
        if (minValue === price.defaultMin && maxValue === price.defaultMax) {
            optionPanelSetContext.setIsPanelClearButtonActivated({ ...optionPanelSetContext.isPanelClearButtonActivated, price: false });
        } else optionPanelSetContext.setIsPanelClearButtonActivated({ ...optionPanelSetContext.isPanelClearButtonActivated, price: true });
    };

    // 가격 입력 시 이벤트 처리
    const handleOnChangeInput = (event) => {
        const name = event.target.name;
        const value = Number(event.target.value);
        if (name === "priceMin") setPriceMin(value);
        else if (name === "priceMax") setPriceMax(value);
    };

    // 최소값 입력 및 상태 업데이트
    const setPriceMin = (value) => {
        if (value >= price.max || isNaN(value)) return;
        checkClearButtonOnChange(value, price.defaultMin, price.max, price.defaultMax);
        optionPanelSetContext.dispatchSetPrice({ type: "setPriceMin", payload: { minValue: value } });
    };

    // 최대값 입력 및 상태 업데이트
    const setPriceMax = (value) => {
        if (value > price.defaultMax || isNaN(value)) return;
        checkClearButtonOnChange(value, price.defaultMax, price.min, price.defaultMin);
        optionPanelSetContext.dispatchSetPrice({ type: "setPriceMax", payload: { maxValue: value } });
    };

    // 가격 직접 입력시 삭제 버튼 노출 여부 결정
    const checkClearButtonOnChange = (value, defaultMinMax1, minMax, defaultMinMax2) => {
        if (value === defaultMinMax1 && minMax === defaultMinMax2) {
            optionPanelSetContext.setIsPanelClearButtonActivated({ ...optionPanelSetContext.isPanelClearButtonActivated, price: false });
        } else optionPanelSetContext.setIsPanelClearButtonActivated({ ...optionPanelSetContext.isPanelClearButtonActivated, price: true });
    }

    // 탭에 표시할 가격 정보
    const tabMsgs = {
        priceDefault: '가격',
        prices: `\u{FFE6} ${attachComma(price.min)}- \u{FFE6} ${attachComma(price.max)}`,
        priceMin: `최대 \u{FFE6} ${attachComma(price.max)}`,
        priceMax: `\u{FFE6} ${attachComma(price.min)} +`
    };

    const { priceDefault, prices, priceMin, priceMax } = tabMsgs;

    const generateQueryString = () => {
        let queryString = "";
        const template = `&price_min={{min}}&price_max={{max}}`
        let regExpMin = new RegExp('{{min}}');
        let regExpMax = new RegExp('{{max}}');
        queryString += template.replace(regExpMin, price.min).replace(regExpMax, price.max);
        return queryString;
    }

    const applyPrice = (event) => {
        event.stopPropagation();

        // 쿼리 생성 및 fetch 요청
        generateIndexedQueryString(fetchQueryContext.queryString.str);
        fetchQueryContext.operateFetchQuery(fetchQueryContext.queryString.str, true, true);
        window.scrollTo(0, 0);

        // 패널 닫기, 화면 흐림 해제
        closePanelContext.setIsPanelClosed(true);
        closePanelContext.clearDimmedSections();

        if (price.min === price.defaultMin && price.max === price.defaultMax) {
            optionPanelSetContext.toggleTabOnOff("price", false);
            optionPanelSetContext.dispatchSetPrice({ type: "setTabState", payload: { tabMsg: priceDefault } });
            return;
        } else if (price.min !== price.defaultMin && price.max !== price.defaultMax) {
            optionPanelSetContext.dispatchSetPrice({ type: "setTabState", payload: { tabMsg: prices } });
        } else if (price.min === price.defaultMin) {
            optionPanelSetContext.dispatchSetPrice({ type: "setTabState", payload: { tabMsg: priceMin } });
        } else if (price.max === price.defaultMax) {
            optionPanelSetContext.dispatchSetPrice({ type: "setTabState", payload: { tabMsg: priceMax } });
        }
        optionPanelSetContext.toggleTabOnOff("price", true);
    };

    const generateIndexedQueryString = (queryString = fetchQueryContext.queryString.str) => {
        const regExp = /&next_items_idx=\d+/;
        queryString = queryString.replace(queryToClear, "");
        let generatedQuery = generateQueryString();
        if (queryString.includes("&next_items_idx=")) {
            queryString = queryString.replace(regExp, nextItemsIdxDefault);
            queryString += generatedQuery;
        } else {
            generatedQuery += nextItemsIdxDefault;
            queryString += generatedQuery;
        }
        queryToClear = generatedQuery;
        fetchQueryContext.queryString.str = queryString;
    };

    const clearPrice = (event) => {
        event.stopPropagation();
        optionPanelSetContext.toggleTabOnOff("price", false);
        optionPanelSetContext.dispatchSetPrice({ type: 'clear' });
        optionPanelSetContext.setIsPanelClearButtonActivated({ ...optionPanelSetContext.isPanelClearButtonActivated, price: false });
    };

    const wonCurrency = "\u{FFE6}"
    const Placeholder = (props) => <div {...props}>결과를 불러오고 있습니다.</div>;
    const PriceAvgMsg = (props) => <div {...props}>평균 1박 요금은 {wonCurrency}{attachComma(fetchQueryContext.priceAvg)}입니다.</div>;
    const StyledPriceAvgMsg = styled.div`
        color: rgb(120,120,120); 
    `;

    return (
        <PriceOptionPanelStyle>
            {!fetchQueryContext.isPricePlaceholder ? <StyledPriceAvgMsg as={Placeholder} /> :
                <div>
                    <StyledPriceAvgMsg as={PriceAvgMsg} />
                    <VictoryBar data={fetchQueryContext.priceRangeMap} x="priceRangeNum" y="itemNum" />
                </div>
            }
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
                    marks={{ 50000: 50000, 100000: 100000, 150000: 150000 }}
                    step={2000}
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
            <ClearApplyStyle>
                <ClearButtonStyle visible={optionPanelSetContext.isPanelClearButtonActivated.price} name="clear" onClick={clearPrice}>
                    {optionPanelSetContext.isPanelClearButtonActivated.price ? '삭제' : null}
                </ClearButtonStyle>
                <ApplyButtonStyle onClick={applyPrice}>
                    적용
                </ApplyButtonStyle>
            </ClearApplyStyle>
        </PriceOptionPanelStyle>
    );
};

export default Price;
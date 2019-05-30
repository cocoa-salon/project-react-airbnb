import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { style } from './inputFieldStyle';

import { ResetContext } from '../Header';
import { FetchQueryContext } from '../../Main';

const { RemoveKeywordButton, StyledInputFiled, StyledResultWindow } = style;

const StyledInputPanel = styled(InputPanel)`
    width: 350px;
    height: auto;
    position: absolute;
    top: 14px;
    left: 40px;
    margin-left: 10px; 
    background: white;
    border-radius: 4px;
    border: rgb(230,230,230) solid 1px; 
    box-shadow: 1px 1px 1px 1px rgba(240,240,240,1); 
    transition: box-shadow 0.4s; 
    z-index: 90; 
    &:hover {    
        box-shadow: 1px 0px 10px 10px rgba(240,240,240,1); 
    };

    &.input-panel-enter {
        width: 350px;
    };

    &.input-panel-enter-active {
        width: 400px;
        transition: width 200ms ease-in;
    };

    &.input-panel-enter-done {
        width: 400px;
    };

    &.input-panel-exit {
        width: 400px;
    };

    &.input-panel-exit-active {
        width: 350px;
        transition: width 200ms ease-out
    };

    &.input-panel-exit-done {
        width: 350px;
    };
`

function InputPanel({ className, children }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

function InputField(props) {
    const [inProp, setInProp] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isCursorEntered, setIsCursorEntered] = useState(false);

    const handleOnFocus = () => setInProp(true);

    const handleOnBlur = () => {
        if (isCursorEntered) return
        else return setInProp(false);
    }

    const handleOnChange = event => setInputValue(event.target.value);

    const removeInputValue = () => setInputValue("")

    const handleOnMouseEnter = () => setIsCursorEntered(true);

    const handleOnMouseLeave = () => setIsCursorEntered(false);

    const closeResultWindow = () => setInProp(false);

    return (
        <InputFieldDiv onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <CSSTransition in={inProp} timeout={200} classNames="input-field" classNames="input-panel">
                <StyledInputPanel >
                    <StyledInputFiled
                        type="text"
                        value={inputValue}
                        placeholder="검색"
                        onFocus={handleOnFocus}
                        onBlur={handleOnBlur}
                        onChange={handleOnChange}
                    />
                    {inProp === true ? <RemoveKeywordButton children="X" onClick={removeInputValue} /> : null}
                </StyledInputPanel>
            </CSSTransition>
            <CSSTransition in={inProp} timeout={200} classNames="result-window">
                <StyledResultWindow onClick={closeResultWindow} className="styledResultWindow">
                    {inProp === true ? <AdditionalButtons /> : null}
                </StyledResultWindow>
            </CSSTransition>
        </InputFieldDiv>
    )
}

const InputFieldDiv = styled.div`
    width: auto;
    height: 50px;
`

const AdditionalButtons = function (props) {

    const triggerResetValue = useContext(ResetContext);
    const fetchQueryContext = useContext(FetchQueryContext);


    const triggerReset = (event) => {
        if (event.target.tagName === 'BUTTON') {
            triggerResetValue.resetAll();
        }
    }

    const StyledDiv = styled.div`
        position: relative; 
        z-index: 30;
        padding-top: 10px;
        margin-left: 3px;
        margin-bottom: 50px; 
        background: white;
    `
    const StyledButton = styled.button`
        width: auto;
        height: auto;
        padding: 13px 16px 13px 16px;
        border-radius: 4px; 
        border: rgb(230,230,230) solid 1px; 
        margin: 10px 0 50px 20px;
        font-size: 14px; 
        background: white;
        color: rgb(60,60,60);
        &:hover {
            box-shadow: 0px 0px 1px 1px rgba(240,240,240,1);
        }
    `
    const ExploreTestStyle = styled.p`
        color: rgb(60,60,60);
        font-size: 12px;
        font-weight: bold;
        padding-left: 20px;
        margin: 0px;
    `

    return (
        <StyledDiv onClick={triggerReset}>
            <ExploreTestStyle>에어비엔비 둘러보기</ExploreTestStyle>
            <Link to="/search/all">
                <StyledButton onClick={fetchQueryContext.operateFetchQuery}>모두</StyledButton>
            </Link>
            <Link to="/search/inn">
                <StyledButton onClick={fetchQueryContext.operateFetchQuery}>숙소</StyledButton>
            </Link>
            <Link to="/search/trip">
                <StyledButton>트립</StyledButton>
            </Link>
            <Link to="/search/restaurant">
                <StyledButton>레스토랑</StyledButton>
            </Link>
        </StyledDiv>
    )
}

export { InputField }; 
import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { style } from './inputFieldStyle';

const { RemoveKeywordButton, StyledInputFiled, StyledResultWindow } = style;

const StyledInputPanel = styled(InputPanel)`
    width: 350px;
    height: 40px;
    position: relative;
    margin-left: 10px; 
    background: #f7f7f7;
    border-radius: 4px;
    box-shadow: 1px 1px 3px;
    transition: box-shadow 0.2s; 
    z-index: 100; 
    &:hover {
        box-shadow: 1px 1px 10px;     
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
        <div onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
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
        </div>
    )
}

const AdditionalButtons = function (props) {
    const StyledDiv = styled.div`
        position: relative; 
        z-index: 30;
        padding-top: 10px;
        margin-left: 3px;
        margin-bottom: 50px; 
        background: white;
    `
    const StyledButton = styled.button`
        width: 70px; 
        height: 60px; 
        border-radius: 4px; 
        box-shadow: 1px 1px 3px;
        margin: 20px 0 50px 20px;
        font-size: 14px; 
        background: rgb(0,121,126);
        &:hover {
            color: white; 
        }
    `
    return (
        <StyledDiv>
            에어비엔비 둘러보기<br />
            <Link to="/search/all">
                <StyledButton>모두</StyledButton>
            </Link>
            <Link to="/search/inn">
                <StyledButton>숙소</StyledButton>
            </Link>
            <Link to="/search/trip">
                <StyledButton>트립</StyledButton>
            </Link>
            <Link to="/search/restaurant">
                <StyledButton>레스토랑</StyledButton>
            </Link>
        </StyledDiv >
    )
}

export { InputField }; 
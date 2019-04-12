import styled from 'styled-components';

export const style = {

    RemoveKeywordButton: styled.div`
        display: inline-block; 
        position: absolute;
        right: 10px; 
        top: 10px;
        width: 20px;
        height: 20px; 
        font-size: 20px; 
        color: grey;
        cursor: pointer; 
    `,


    StyledInputFiled: styled.input`
        display: inline-block; 
        margin-left: 20px; 
        margin-top: 6px;
        width: 300px;
        height: 30px;
        border : none;
        outline: none;
        color: grey;
        background: #f7f7f7; 
        font-size: 18px; 
    
        &.input-field-enter {
            width: 300px;
        };

        &.input-field-enter-active {
            width: 350px;
            transition: width 200ms ease-in;
        };

        &.input-field-enter-done {
            width: 350px;
        };

        &.input-field-exit {
            width: 350px;
        };

        &.input-field-exit-active {
            width: 300px;
            transition: width 200ms ease-out
        };

        &.input-field-exit-done {
            width: 300px;
        };
    `,

    StyledResultWindow: styled.div`
        width: 350px;
        margin-left: 10px; 
        margin-bottom: 30px; 
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        background: white;
        box-shadow: 1px 1px 3px;
        opacity: 0;

        &.result-window-enter {
            width: 350px;
            opacity: 0;
        };

        &.result-window-enter-active {
            width: 400px;
            opacity: 1;
            transition: width 200ms ease-in, opacity 200ms;
        };

        &.result-window-enter-done {
            opacity: 1;
            width: 400px;
        };

        &.result-window-exit {
            opacity: 1;
            width: 400px;
        };

        &.result-window-exit-active {
            opacity: 0;
            width: 300px;
            transition: width 200ms ease-out, opacity 200ms
        };

        &.result-window-exit-done {
            opacity: 0;
            width: 350px;
        };
    `
}
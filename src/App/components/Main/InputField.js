import React from 'react';
import styled from 'styled-components';

function InputField(props) {

    const InputDiv = styled.div`
        display: flex;
        flex-direction : row;
        align-items : center;
        margin-left: 20px; 
        border-radius: 4px; 
        height: 50px;
        width: 400px;
        box-shadow: 1px 1px 3px;
        transition: box-shadow 0.2s; 
        &:hover {
            box-shadow: 1px 1px 10px; 
    }
    `

    const InputStyle = styled.input`
        display: inline-block;   
        margin-left: 80px; 
        height: 30px;
        width: 300px;
        border : none;
        outline: none;
        color: grey;
        font-size: 18px; 
        background: #f7f7f7;
    `

    function handleClick(event) {
        // event.target.style.transition = "width 0.5s";
    }

    return (
        <InputDiv>

            <InputStyle type="text" placeholder="'마드리드'에 가보는 건 어떠세요?" onClick={handleClick} />
        </InputDiv>
    )

}

export { InputField }; 
import React from 'react';

import { SearchOptionStyle } from './SearchOptionStyle';

function Guest(props) {
    // const modifyGuestNum = () => setIsDisplayed(!isDisplayed);

    const handleOnMouseLeave = () => props.handleOnMouseLeave();
    const handleOnMouseEnter = () => props.handleOnMouseEnter();

    // 유아, 어린이 선택시 무조건 성인 1명 추가, 감소 버튼 눌러도 1에서 감소하지 않음. 

    const calculateGuestNum = (event) => {
        const name = event.target.name;
        props.calculateGuestNum(name);
    }

    // 왜 창을 닫았다 다시 열면 0으로 초기화... 아 새로 렌더를 하니까 그렇구나. 이걸 어디에 저장해야 할 텐데

    return (
        <SearchOptionStyle onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter} onClick={calculateGuestNum} >
            <div>
                성인 <button name="removeAdult">-</button>
                {props.adultNum} +
                    <button name="addAdult">+</button>
            </div>
            <div>
                어린이 <button name="removeChildren">-</button>
                {props.childNum} +
                    <button name="addChildren">+</button>
            </div>
            <div>
                유아 <button name="removeToddler">-</button>
                {props.toddlerNum} +
                    <button name="addToddler">+</button>
            </div>
        </SearchOptionStyle>
    )
}













export { Guest };
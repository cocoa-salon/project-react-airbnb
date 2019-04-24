import React from 'react';
import { StyledOptionButton } from './OptionButtonStyle'

const SearchTabButtons = {
    DateSetButton: (props) => {
        function passButtonClick(event) {
            props.passButtonClick(event);

        }
        return (
            <StyledOptionButton name="date" onClick={passButtonClick}>
                날짜
            </StyledOptionButton>
        )
    },

    GuestSetNumButton: (props) => {        
        function passButtonClick(event) {
            props.passButtonClick(event);
        }

        return (
            <StyledOptionButton name="guest" onClick={passButtonClick}>
                {props.guestNum === 0 ? "인원" :
                    props.guestNum > 0 ? `게스트 ${props.guestNum}`  : ''
                }
                {props.toddlerNum > 0 ? `유아 ${[props.toddlerNum]}` : '' }
            </StyledOptionButton>
        )
    },

    InnTypeSetButton: (props) => {
        function passButtonClick(event) {
            props.passButtonClick(event);

        }
        return (
            <StyledOptionButton name="innType" onClick={passButtonClick}>
                숙소타입
            </StyledOptionButton>
        )
    },

    InstantBookSetButton: (props) => {
        function passButtonClick(event) {
            props.passButtonClick(event);

        }
        return (
            <StyledOptionButton name="instantBook" onClick={passButtonClick}>
                즉시예약
            </StyledOptionButton>
        )
    },

    PriceSetButton: (props) => {
        function passButtonClick(event) {
            props.passButtonClick(event);

        }
        return (
            <StyledOptionButton name="price" onClick={passButtonClick}>
                가격
            </StyledOptionButton>
        )
    },

    TimeSetButton: (props) => {
        function passButtonClick(event) {
            props.passButtonClick(event);

        }
        return (
            <StyledOptionButton name="time" onClick={passButtonClick}>
                시간
            </StyledOptionButton>
        )
    },

    FilterAddButton: (props) => {
        function passButtonClick(event) {
            props.passButtonClick(event);

        }
        return (
            <StyledOptionButton name="filterAdd" onClick={passButtonClick}>
                필터추가
            </StyledOptionButton>
        )
    }
}

export { SearchTabButtons }








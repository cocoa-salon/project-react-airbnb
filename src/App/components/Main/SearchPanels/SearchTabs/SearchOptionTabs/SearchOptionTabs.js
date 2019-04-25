import React from 'react';
import { Link } from 'react-router-dom';
import { StyledOptionButton } from './OptionButtonStyle'

const SearchOptionTabs = {

    DateSetTab: (props) => {
        function passButtonClick(event) {
            const optionTabUrl = props.match.url;
            props.passButtonClick(event);
            props.passTabUrl(optionTabUrl);
        }
        return (
            <Link to={`${props.match.url}/date`} onClick={passButtonClick}>
                <StyledOptionButton name="date">
                    날짜
                </StyledOptionButton>
            </Link>
        )
    },

    GuestSetTab: (props) => {
        function passButtonClick(event) {
            props.passButtonClick(event);
            const optionTabUrl = props.match.url;
            props.passTabUrl(optionTabUrl);
        }

        return (
            <Link to={`${props.match.url}/guest`} onClick={passButtonClick}>
                <StyledOptionButton name="guest" >
                    {props.guestNum === 0 ? "인원" :
                        props.guestNum > 0 ? `게스트 ${props.guestNum}` : ''
                    }
                    {props.toddlerNum > 0 ? `유아 ${[props.toddlerNum]}` : ''}
                </StyledOptionButton>
            </Link>
        )
    },

    InnTypeSetTab: (props) => {
        function passButtonClick(event) {
            props.passButtonClick(event);
            const optionTabUrl = props.match.url;
            props.passTabUrl(optionTabUrl);

        }
        return (
            <Link to={`${props.match.url}/innType`} onClick={passButtonClick}>
                <StyledOptionButton name="innType" >
                    숙소타입
                </StyledOptionButton>
            </Link>
        )
    },

    InstantBookSetTab: (props) => {
        function passButtonClick(event) {
            props.passButtonClick(event);
            const optionTabUrl = props.match.url;
            props.passTabUrl(optionTabUrl);

        }
        return (
            <Link to={`${props.match.url}/instantBook`} onClick={passButtonClick}>
                <StyledOptionButton name="instantBook" >
                    즉시예약
            </StyledOptionButton>
            </Link>
        )
    },

    PriceSetTab: (props) => {
        function passButtonClick(event) {
            props.passButtonClick(event);
            const optionTabUrl = props.match.url;
            props.passTabUrl(optionTabUrl);

        }
        return (
            <Link to={`${props.match.url}/price`} onClick={passButtonClick}>
                <StyledOptionButton name="price" >
                    가격
            </StyledOptionButton>
            </Link>
        )
    },

    TimeSetTab: (props) => {
        function passButtonClick(event) {
            props.passButtonClick(event);
            const optionTabUrl = props.match.url;
            props.passTabUrl(optionTabUrl);

        }
        return (
            <Link to={`${props.match.url}/time`} onClick={passButtonClick}>
                <StyledOptionButton name="time" >
                    시간
                </StyledOptionButton>
            </Link>
        )
    },

    FilterAddTab: (props) => {
        function passButtonClick(event) {
            props.passButtonClick(event);
            const optionTabUrl = props.match.url;
            props.passTabUrl(optionTabUrl);

        }
        return (
            <Link to={`${props.match.url}/filterAdd`} onClick={passButtonClick}>
                <StyledOptionButton name="filterAdd" >
                    필터추가
            </StyledOptionButton>
            </Link>
        )
    }
}

export { SearchOptionTabs }
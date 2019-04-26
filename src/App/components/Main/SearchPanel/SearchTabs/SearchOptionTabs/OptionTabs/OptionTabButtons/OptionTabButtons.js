import React from 'react';
import { Link } from 'react-router-dom';
import { OptionTabButtonStyle } from './OptionTabButtonStyle'

const OptionTabButtons = {

    DateSetTab: (props) => {
        function passButtonClick(event) {
            const optionTabUrl = props.match.url;
            props.passButtonClick(event);
            props.passTabUrl(optionTabUrl);
        }
        return (
            <Link to={`${props.match.url}/date`} onClick={passButtonClick}>
                <OptionTabButtonStyle name="date">
                    날짜
                </OptionTabButtonStyle>
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
                <OptionTabButtonStyle name="guest" >
                    {props.guestNum === 0 ? "인원" :
                        props.guestNum > 0 ? `게스트 ${props.guestNum}` : ''
                    }
                    {props.toddlerNum > 0 ? `유아 ${[props.toddlerNum]}` : ''}
                </OptionTabButtonStyle>
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
                <OptionTabButtonStyle name="innType" >
                    숙소타입
                </OptionTabButtonStyle>
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
                <OptionTabButtonStyle name="instantBook" >
                    즉시예약
                </OptionTabButtonStyle>
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
                <OptionTabButtonStyle name="price" >
                    가격
                </OptionTabButtonStyle>
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
                <OptionTabButtonStyle name="time" >
                    시간
                </OptionTabButtonStyle>
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
                <OptionTabButtonStyle name="filterAdd" >
                    필터추가
                </OptionTabButtonStyle>
            </Link>
        )
    }
}

export { OptionTabButtons }
import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOptionTabStyle } from './SearchOptionTabStyle'

const SearchOptionTabs = (props) => {

    function passButtonClick(event) {
        const optionTabUrl = props.match.url;
        props.passButtonClick(event);
        props.passTabUrl(optionTabUrl);
    }

    return (
        <Link to={`${props.match.url}/${props.type}`} onClick={passButtonClick}>
            <SearchOptionTabStyle name={props.type}> {
                (props.type === 'date' && <DateOptionTap {...props} />) ||
                (props.type === 'guest' && <GuestOptionTap {...props} />) ||
                (props.type === 'innType' && <InnTypeOptionTap {...props} />) ||
                (props.type === 'instantBook' && <InstantBookOptionTap {...props} />) ||
                (props.type === 'price' && <PriceOptionTap {...props} />) ||
                (props.type === 'time' && <TimeOptionTap {...props} />) ||
                (props.type === 'filterAdd' && <FilterAddOptionTap {...props} />)
            }
            </SearchOptionTabStyle>
        </Link>
    )
}

const DateOptionTap = (props) => <span>날짜</span>;

const GuestOptionTap = (props) => 
    <div>
        {props.guestNum === 0 ? '인원' : props.guestNum > 0 ? `게스트 ${props.guestNum}` : ''}
        {props.toddlerNum > 0 ? `유아 ${props.toddlerNum}` : ''}
    </div>


const InnTypeOptionTap = (props) => 
    <div>
        {props.innTypes.allhouse === false && props.innTypes.privateRoom === false && props.innTypes.hotelRoom === false && props.innTypes.publicRoom === false ? "숙소 타입" :
            props.innTypes.allhouse === true ? "집 전체" : 'test'}
    </div>


const InstantBookOptionTap = (props) => <span>즉시 예약</span>;
const PriceOptionTap = (props) => <span>가격</span>;
const TimeOptionTap = (props) => <span>시간</span>;
const FilterAddOptionTap = (props) => <span>필터 추가</span>;


export { SearchOptionTabs }




import React from 'react'; 

const GuestTapDisplay = (props) =>
    <div>
        {props.guestNum === 0 ? '인원' : props.guestNum > 0 ? `게스트 ${props.guestNum}` : ''}
        {props.toddlerNum > 0 ? `유아 ${props.toddlerNum}` : ''}
    </div>

export { GuestTapDisplay };
import React from 'react';
import { SearchTabConsumer } from '../../SearchTabs';


const GuestTapDisplay = () =>
    <SearchTabConsumer>
        {
            (value) => (
                <div>
                    {value.guestNum === 0 ? '인원' : value.guestNum > 0 ? `게스트 ${value.guestNum}` : ''}
                    {value.toddlerNum > 0 ? `유아 ${value.toddlerNum}` : ''}
                </div>
            )
        }
    </SearchTabConsumer>

export { GuestTapDisplay };
import React from 'react';
import { SearchTabConsumer } from '../../SearchTabs';


const InstantBookTapDisplay = (props) =>
    <SearchTabConsumer>
        {(value) =>
            <span>즉시예약</span>
        }
    </SearchTabConsumer>

export { InstantBookTapDisplay };
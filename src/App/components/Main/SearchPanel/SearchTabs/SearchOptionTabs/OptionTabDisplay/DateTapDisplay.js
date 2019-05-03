import React from 'react';
import { SearchTabConsumer } from '../../SearchTabs';

const DateTapDisplay = (props) =>
    <SearchTabConsumer>
        {(value) =>
            <span>날짜</span>
        }
    </SearchTabConsumer>

export { DateTapDisplay }; 
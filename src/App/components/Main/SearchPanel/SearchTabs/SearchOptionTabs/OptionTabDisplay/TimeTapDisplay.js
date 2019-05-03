import React from 'react';
import { SearchTabConsumer } from '../../SearchTabs';


const TimeTapDisplay = (props) => 
    <SearchTabConsumer>
        {(value) =>
            <span>시간Ï</span>
        }
    </SearchTabConsumer>

export { TimeTapDisplay };

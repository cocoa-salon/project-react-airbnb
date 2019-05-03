import React from 'react';
import { SearchTabConsumer } from '../../SearchTabs';


const FilterAddTapDisplay = (props) =>
    <SearchTabConsumer>
        {(value) =>
            <span>필터 추가</span>
        }
    </SearchTabConsumer>

export { FilterAddTapDisplay };

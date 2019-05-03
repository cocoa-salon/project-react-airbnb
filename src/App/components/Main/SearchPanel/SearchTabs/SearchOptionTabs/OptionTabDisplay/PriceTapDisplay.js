import React from 'react';
import { SearchTabConsumer } from '../../SearchTabs';


const PriceTapDisplay = (props) =>
    <SearchTabConsumer>
        {(value) =>
            <span>가격</span>
        }
    </SearchTabConsumer>

export { PriceTapDisplay };
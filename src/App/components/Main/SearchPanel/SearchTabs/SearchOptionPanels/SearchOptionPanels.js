import React from 'react';
import { Route } from 'react-router-dom';
import { SelectedSearchOptionPanels } from './SelectedSearchOptionPanels';

import { SearchOptionPanelConsumer } from '../SearchTabs';


const SearchOptionPanels = (props) => {

    return (
        <SearchOptionPanelConsumer>
            {(value) =>
                <div>
                    <Route path={`${value.optionTabUrl}/:id`} render={(props) =>
                        <SelectedSearchOptionPanels match={props.match} />
                    }
                    />
                </div>
            }
        </SearchOptionPanelConsumer>
    )
}

export { SearchOptionPanels };

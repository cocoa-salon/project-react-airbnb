import React,{useContext} from 'react';
import { Route } from 'react-router-dom';
import { SearchOptionPanelContext } from '../SearchTabs';
import { SelectedSearchOptionPanels } from './SelectedSearchOptionPanels';


const SearchOptionPanels = (props) => {

    const value = useContext(SearchOptionPanelContext);

    return (
        <div>
            <Route path={`${value.optionTabUrl}/:id`} render={(props) =>
                <SelectedSearchOptionPanels match={props.match} />
            }
            />
        </div>
    )
}

export { SearchOptionPanels };

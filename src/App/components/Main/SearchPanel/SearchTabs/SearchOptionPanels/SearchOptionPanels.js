import React,{useContext} from 'react';
import { Route } from 'react-router-dom';
import { SearchOptionPanelContext } from '../SearchTabs';
import { ClosePanelContext } from '../../../Main.js';
import { SelectedSearchOptionPanels } from './SelectedSearchOptionPanels';

const SearchOptionPanels = (props) => {

    const searchOptionPanelContextValue = useContext(SearchOptionPanelContext);
    const mouseLeaveContextValue = useContext(ClosePanelContext);
    

    const handleIsOnMouseLeavePanel = (event) => {
        let cursorOff = event.target.dataset.cursorOff;
        event.type === "mouseleave" ?  cursorOff = true : cursorOff = false; 
        mouseLeaveContextValue.handleIsOnMouseLeavePanel(cursorOff);
    }

    return (
        <div data-cursoroff={true} onMouseLeave={handleIsOnMouseLeavePanel} onMouseEnter={handleIsOnMouseLeavePanel}>
            <Route path={`${searchOptionPanelContextValue.optionTabUrl}/:id`} render={(props) =>
                <SelectedSearchOptionPanels match={props.match} />
            }
            />
        </div>
    )
}

export { SearchOptionPanels };

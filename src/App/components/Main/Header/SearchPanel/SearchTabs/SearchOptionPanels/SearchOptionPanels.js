import React,{useContext} from 'react';
import { Route } from 'react-router-dom';
import { ClosePanelContext } from '../../../../Main';
import { SelectedSearchOptionPanels } from './SelectedSearchOptionPanels';


const SearchOptionPanels = (props) => {

    const mouseLeaveContextValue = useContext(ClosePanelContext);

    const handleIsOnMouseLeavePanel = (event) => {
        let cursorOff = event.target.dataset.cursorOff;
        event.type === "mouseleave" ?  cursorOff = true : cursorOff = false; 
        mouseLeaveContextValue.handleIsOnMouseLeavePanel(cursorOff);
    }

    return (
        <div data-cursoroff={true} onMouseLeave={handleIsOnMouseLeavePanel} onMouseEnter={handleIsOnMouseLeavePanel}>
            <Route path={`${mouseLeaveContextValue.optionTabUrl}/:id`} render={(props) =>
                <SelectedSearchOptionPanels match={props.match} />
            }
            />
        </div>
    )
}

export { SearchOptionPanels };

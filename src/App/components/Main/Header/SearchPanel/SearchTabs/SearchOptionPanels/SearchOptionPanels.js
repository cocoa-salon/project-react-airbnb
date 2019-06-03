import React,{useContext} from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { ClosePanelContext } from '../../../../Main';
import SelectedSearchOptionPanels from './SelectedSearchOptionPanels';


const SearchOptionPanels = (props) => {

    const closePanelContext = useContext(ClosePanelContext);

    const handleIsOnMouseLeavePanel = (event) => {
        let cursorOff = event.target.dataset.cursorOff;
        event.type === "mouseleave" ?  cursorOff = true : cursorOff = false; 
        closePanelContext.handleIsOnMouseLeavePanel(cursorOff);
    };

    const SearchOptionPanelArea = styled.div`
        width: 400px;
        height: 100%; 
    `  

    return (
        <SearchOptionPanelArea data-cursoroff={true} onMouseLeave={handleIsOnMouseLeavePanel} onMouseEnter={handleIsOnMouseLeavePanel}>
            <Route path={`${closePanelContext.searchOptionTabUrl}/:id`} render={(props) => {
                return (
                    <SelectedSearchOptionPanels match={props.match} />
                );
            }}/>
        </SearchOptionPanelArea>
    );
};

export default SearchOptionPanels;

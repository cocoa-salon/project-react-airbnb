import React, { useContext } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { ClosePanelContext } from '../../../../Main';
import SelectedSearchOptionPanels from './SelectedSearchOptionPanels';

const SearchOptionPanelArea = styled.div`
    position: relative;
    top: 16px;
    width: 400px;
    height: 100%; 
`;

const SearchOptionPanels = (props) => {

    const closePanelContext = useContext(ClosePanelContext);

    const handleIsOnMouseLeavePanel = (event) => {
        let cursorOff = event.target.dataset.cursorOff;
        event.type === "mouseleave" ? cursorOff = true : cursorOff = false;
        closePanelContext.handleIsOnMouseLeavePanel(cursorOff);
    };

    return (
        <SearchOptionPanelArea className="PanelArea" data-cursoroff={true} onMouseLeave={handleIsOnMouseLeavePanel} onMouseEnter={handleIsOnMouseLeavePanel}>
                <Route path={`${closePanelContext.searchOptionTabUrl}/:id`} render={(props) =>
                    <SelectedSearchOptionPanels match={props.match} />
                } />
        </SearchOptionPanelArea>
    );
};

export default SearchOptionPanels;
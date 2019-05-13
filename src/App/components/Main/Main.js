import React, { useState } from 'react';
import Header from './Header/Header'
import Sections from './Sections/Sections';
import SearchPanel from './SearchPanel/SearchPanel';

export const ClosePanelContext = React.createContext();

function Main() {
    const [isMouseLeaved, setMouseLeaved] = useState(false);
    const [selectedTabName, setSelectedTabName] = useState('none');

    // 포인터가 바깥에 있는 상태
    let isCursorOffPanel = true; 
    let isCursorOffTab = true;

    const setSelectedTab = (tabName) => {
        setSelectedTabName(tabName);
    }

    // 마우스 커서와 탭
    function handleIsOnMouseLeaveTab(cursorOff) {
        isCursorOffTab = cursorOff;
    }

    // 마우스 커서와 패널
    function handleIsOnMouseLeavePanel(cursorOff) {
        isCursorOffPanel = cursorOff;
    }

    const closeSearchOptionPanel = () => {
        if (isCursorOffTab === true && isCursorOffPanel === true) {
            setSelectedTabName("none");
        }
    }

    const closePanelProps = {
        handleIsOnMouseLeavePanel: handleIsOnMouseLeavePanel,
        handleIsOnMouseLeaveTab: handleIsOnMouseLeaveTab
    }

    return (
        <ClosePanelContext.Provider value={{...closePanelProps}}>
            <div onClick={closeSearchOptionPanel}>
                <Header />
                <SearchPanel
                    selectedTabName={selectedTabName}
                    passSelectedTab={setSelectedTab}
                />
                <Sections />
            </div>
        </ClosePanelContext.Provider>
    )
}

export { Main }; 
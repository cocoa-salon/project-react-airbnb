import React, { useState } from 'react';
import Header from './Header/Header'
import Sections from './Sections/Sections';
import SearchPanel from './SearchPanel/SearchPanel';

export const ClosePanelContext = React.createContext();

function Main() {
    const [isMouseLeaved, setMouseLeaved] = useState(false);
    const [isMouseLeavedTab, setMouseLeavedTab] = useState(false);
    const [selectedTabName, setSelectedTabName] = useState('none');


    // 포인터가 바깥에 있는 상태
    const isCursorOnTab = false;
    const isCursorOnPanel = false; 

    const setSelectedTab = (tabName) => {
        setSelectedTabName(tabName);
    }

    // 마우스 커서와 패널
    function handleOnMouseLeave() {
        setMouseLeaved(true);
    }

    function handleOnMouseEnter() {
        setMouseLeaved(false);
    }

    // 마우스 커서와 탭
    function handleOnMouseLeaveTab() {
        setMouseLeavedTab(true);
    }

    function handleOnMouseEnterTab() {
        setMouseLeavedTab(false);
    }

    const closeSearchOptionPanel = () => {
        if (isMouseLeaved === true && isMouseLeavedTab === true) {
            setSelectedTabName("none");
        }
    }

    const closePanelProps = {
        handleOnMouseLeave: handleOnMouseLeave,
        handleOnMouseEnter: handleOnMouseEnter,
        handleOnMouseLeaveTab: handleOnMouseLeaveTab,
        handleOnMouseEnterTab: handleOnMouseEnterTab
    }

    return (
        <ClosePanelContext.Provider value={{...closePanelProps}}>
            <div onClick={closeSearchOptionPanel}>
                <Header />
                <SearchPanel
                    handleOnMouseLeave={handleOnMouseLeave}
                    handleOnMouseEnter={handleOnMouseEnter}
                    handleOnMouseLeaveTab={handleOnMouseLeaveTab}
                    handleOnMouseEnterTab={handleOnMouseEnterTab}
                    selectedTabName={selectedTabName}
                    passSelectedTab={setSelectedTab}
                />
                <Sections />
            </div>
        </ClosePanelContext.Provider>
    )
}

export { Main }; 
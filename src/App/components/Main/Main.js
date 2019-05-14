import React, { useState } from 'react';
import Header from './Header/Header';
import Sections from './Sections/Sections';
export const ClosePanelContext = React.createContext();

function Main() {

    const [selectedTabName, setSelectedTabName] = useState('none');
    const [optionTabUrl, setOptionTabUrl] = useState('');

    // 포인터가 바깥에 있는 상태
    let isCursorOffPanel = true;
    let isCursorOffTab = true;

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
    };

    const setSelectedTab = (event, url) => {
        const tabName = event.currentTarget.name;
        const optionTabUrl = url;
        passTabUrl(optionTabUrl);
        setSelectedTabName(tabName)
    };

    const passTabUrl = (optionTabUrl) => {
        setOptionTabUrl(optionTabUrl);
    }

    const showPanelProps = {
        handleIsOnMouseLeavePanel: handleIsOnMouseLeavePanel,
        handleIsOnMouseLeaveTab: handleIsOnMouseLeaveTab,
        passSelectedTab: setSelectedTab,
        selectedTabName: selectedTabName,
        optionTabUrl: optionTabUrl,
    }

    return (
        <ClosePanelContext.Provider value={{ ...showPanelProps }}>
            <div onClick={closeSearchOptionPanel}>
                <Header />
                <Sections />
            </div>
        </ClosePanelContext.Provider>
    )
}

export default Main;
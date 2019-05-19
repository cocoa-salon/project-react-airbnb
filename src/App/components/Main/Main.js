import React, { useState } from 'react';
import Header from './Header/Header';
import Sections from './Sections/Sections';

// 변수 이름 변경
export const ClosePanelContext = React.createContext();

function Main() {

    const [selectedTab, setSelectedTab] = useState('none');
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

    // 패널 닫힘
    const closeSearchOptionPanel = () => {
        if (isCursorOffTab === true && isCursorOffPanel === true) {
            setSelectedTab("none");
        }
    };

    const setSelectedTabUrl = (event, url) => {
        const tabName = event.currentTarget.name;
        const optionTabUrl = url;
        passTabUrl(optionTabUrl);
        setSelectedTab(tabName);
    };

    const passTabUrl = (optionTabUrl) => {
        setOptionTabUrl(optionTabUrl);
    }

    // 분리
    const SearchOptionPanelToggleProps = {
        handleIsOnMouseLeavePanel: handleIsOnMouseLeavePanel,
        handleIsOnMouseLeaveTab: handleIsOnMouseLeaveTab,
        passSelectedTab: setSelectedTabUrl,
        selectedTab: selectedTab,
        optionTabUrl: optionTabUrl,
        setSelectedTab: setSelectedTab
    }

    return (
        <ClosePanelContext.Provider value={{ ...SearchOptionPanelToggleProps }}>
            <div onClick={closeSearchOptionPanel}>
                <Header />
                <Sections />
            </div>
        </ClosePanelContext.Provider>
    )
}

export default Main;
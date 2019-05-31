import React, { useState } from 'react';
import styled from 'styled-components'; 
import Header from './Header/Header';
import Sections from './Sections/Sections';
import requestURL from '../../../../src/requestURL';
import { StyledItemsContainer, StyledItemsList } from './Sections/ItemsList';
export const ClosePanelContext = React.createContext();
export const FetchQueryContext = React.createContext();

let queryString = {
    str: ""
};

function Main() {

    const [ isDimmed, setIsDimmed ] = useState('false');

    const [selectedTab, setSelectedTab] = useState('none');
    const [optionTabUrl, setOptionTabUrl] = useState('');

    // 포인터가 바깥에 있는 상태
    let isCursorOffPanel = true;
    let isCursorOffTab = true;

    // 마우스 커서와 탭
    function handleIsOnMouseLeaveTab(cursorOff) {
        isCursorOffTab = cursorOff;
    };

    // 마우스 커서와 패널
    function handleIsOnMouseLeavePanel(cursorOff) {
        isCursorOffPanel = cursorOff;
    };

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
    };

    const [stayLists, setStayLists] = useState([]);

    // 생성한 쿼리로 fetch 요청 
    const operateFetchQuery = async (queryString) => {
        try {
            const response = await fetch(`${requestURL.FETCHALL}/${queryString}`, { mode: "cors" });
            const resultJson = await response.json();
            let mappedList = resultJson.map((infos) => {
                const itemProps = {
                    className: "items",
                    name: infos['name'],
                    price: infos['price'],
                    propertyType: infos['propertyType'],
                    numberOfReviews: infos['numberOfReviews'],
                    review_scores: infos['review_scores'],
                    image: infos['images']
                };
                return (
                    <StyledItemsList key={infos['_id']}>
                        <StyledItemsContainer {...itemProps} />
                    </StyledItemsList>
                );
            });
            setStayLists(mappedList);
        } catch (err) {
            console.log(err);
        };
    };

    // 분리
    const searchOptionPanelToggleProps = {
        handleIsOnMouseLeavePanel: handleIsOnMouseLeavePanel,
        handleIsOnMouseLeaveTab: handleIsOnMouseLeaveTab,
        passSelectedTab: setSelectedTabUrl,
        selectedTab: selectedTab,
        optionTabUrl: optionTabUrl,
        setSelectedTab: setSelectedTab
    };

    const fetchQueryProps = {
        operateFetchQuery: operateFetchQuery,
        stayLists: stayLists,
        setStayLists: setStayLists,
        queryString: queryString
    }

    return (
        <ClosePanelContext.Provider value={{ ...searchOptionPanelToggleProps }}>
            <FetchQueryContext.Provider value={{ ...fetchQueryProps }}>
                <div>
                    <Header />
                    <Sections />
                </div>
            </FetchQueryContext.Provider>
        </ClosePanelContext.Provider>
    );
};

export default Main;
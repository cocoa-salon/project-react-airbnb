import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Sections from './Sections/Sections';
import { StyledItemsContainer, StyledItemsList } from './Sections/ItemsContainer ';
import { requestURL } from '../../setting_values/setting_values';
export const ClosePanelContext = React.createContext();
export const FetchQueryContext = React.createContext();

let queryString = {
    str: ""
};

// 포인터가 바깥에 있는 상태
let isCursorOffPanel = true;
let isCursorOffTab = true;

function Main() {

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
            clearDimmedSections();
            setIsPanelClosed(true); 
        };
    };
    
    // 화면 흐려짐 상태 
    const [isDimmed, setIsDimmed] = useState(false);

    // 화면 흐려짐 해제
    const clearDimmedSections = () => {
        setIsDimmed(false);
    };

    const applyDimmedSections = () => {
        setIsDimmed(true);
    };

    const toggleDimmedSections = () => {
        setIsDimmed(!isDimmed);
    };

    const [stayLists, setStayLists] = useState([]);

    // 생성한 쿼리로 fetch 요청 
    const [ isFallBackMsg, setIsFallBackMsg ] = useState(true);

    const operateFetchQuery = async (queryString) => {
        try {
            setIsFallBackMsg(true); 
            const response = await fetch(`${requestURL.FETCH_ALL_DATA}/${queryString}`, { mode: "cors" });
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
            setIsFallBackMsg(false); 
            setStayLists(mappedList);
        } catch (err) {
            console.log(err);
        };
    };

    const [ searchOptionTabUrl, setSearchOptionTabUrl] = useState(""); 

    const [ isPanelClosed, setIsPanelClosed ] = useState(true); 

    const searchOptionTabUrlProps = {
        searchOptionTabUrl: searchOptionTabUrl,
        setSearchOptionTabUrl: setSearchOptionTabUrl,
    };

    const searchOptionPanelToggleProps = {
        handleIsOnMouseLeavePanel: handleIsOnMouseLeavePanel,
        handleIsOnMouseLeaveTab: handleIsOnMouseLeaveTab,
        clearDimmedSections: clearDimmedSections,
        applyDimmedSections: applyDimmedSections,
        toggleDimmedSections: toggleDimmedSections,

        isPanelClosed: isPanelClosed,
        setIsPanelClosed: setIsPanelClosed,
    };

    const fetchQueryProps = {
        operateFetchQuery: operateFetchQuery,
        stayLists: stayLists,
        setStayLists: setStayLists,
        queryString: queryString,
        isFallBackMsg: isFallBackMsg
    };

    const DimmedSection = styled.div`
        position: fixed;
        top: 140px;
        margin: 0; 
        width: 100%;
        height: 100%; 
        background: white;
        opacity: ${ isDimmed ? 0.8 : 0};
        z-index: 20;
    `

    return (
            <div onClick={closeSearchOptionPanel} >
                <DimmedSection  />
                <ClosePanelContext.Provider value={{ ...searchOptionPanelToggleProps, ...searchOptionTabUrlProps }}>
                    <FetchQueryContext.Provider value={{ ...fetchQueryProps }}>
                        <Header />
                        <Sections />
                    </FetchQueryContext.Provider>
                </ClosePanelContext.Provider>
            </div>
    );
};

export default Main;


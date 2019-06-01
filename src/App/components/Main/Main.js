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

// 포인터가 바깥에 있는 상태
let isCursorOffPanel = true;
let isCursorOffTab = true;

function Main() {

    const [isDimmed, setIsDimmed] = useState(false);

    // 마우스 커서와 탭
    function handleIsOnMouseLeaveTab(cursorOff) {
        isCursorOffTab = cursorOff;
    };

    // 마우스 커서와 패널
    function handleIsOnMouseLeavePanel(cursorOff) {
        isCursorOffPanel = cursorOff;
    };
    
    // 검색 옵션 패널 활성화  state
    const [ isSearchOptionPanelsActivated, setIsSearchOptionPanelsActivated ] = useState({
        dates: false,
        guests: false,
        typeOfPlace: false,
        instantBook: false,
        price: false,
        time: false,
        moreFilters: false
    });

    // 패널 닫힘
    const closeSearchOptionPanel = () => {
        if (isCursorOffTab === true && isCursorOffPanel === true) {
            clearDimmedSections();
            setIsSearchOptionPanelsActivated({
                dates: false,
                guests: false,
                typeOfPlace: false,
                instantBook: false,
                price: false,
                time: false,
                moreFilters: false,
            });

        };
    };

    const clearDimmedSections = () => {
        setIsDimmed(false);
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

    const searchOptionPanelToggleProps = {
        handleIsOnMouseLeavePanel: handleIsOnMouseLeavePanel,
        handleIsOnMouseLeaveTab: handleIsOnMouseLeaveTab,
        setIsDimmed: setIsDimmed,
        clearDimmedSections: clearDimmedSections,
        isSearchOptionPanelsActivated: isSearchOptionPanelsActivated,
        setIsSearchOptionPanelsActivated: setIsSearchOptionPanelsActivated
    };

    const fetchQueryProps = {
        operateFetchQuery: operateFetchQuery,
        stayLists: stayLists,
        setStayLists: setStayLists,
        queryString: queryString
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
                <ClosePanelContext.Provider value={{ ...searchOptionPanelToggleProps }}>
                    <FetchQueryContext.Provider value={{ ...fetchQueryProps }}>
                        <Header />
                        <Sections />
                    </FetchQueryContext.Provider>
                </ClosePanelContext.Provider>
            </div>
    );
};

export default Main;
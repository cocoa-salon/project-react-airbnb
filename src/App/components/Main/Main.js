import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Sections from './Sections/Sections';
import { StyledItemsContainer } from './Sections/ItemsContainer ';
import { requestURL } from '../../setting_values/setting_values';
import { nextItemsIdxDefault } from '../../setting_values/setting_values';
import { OPERATE_FETCH_TIME } from '../../setting_values/setting_values';
export const ClosePanelContext = React.createContext();
export const FetchQueryContext = React.createContext();

let queryString = {
    str: nextItemsIdxDefault
};
let triggerFetchTimer;
const INCREASE_IDX_NUM = 1;
let isSearching = true;

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
    const [IsShowPlaceholder, setIsShowPlaceholder] = useState(true);
    const [isAdditionalLoad, setIsAdditionalLoad] = useState(true);
    const [isStopLoad, setIsStopLoad] = useState(false);

    const [resultCount, setResultCount] = useState({
        total: 0,
        current: 0
    });

    // 생성한 쿼리로 fetch 요청 
    const operateFetchQuery = async (queryString, isInitialLoad, isSearchingArg) => {
        isSearching = isSearchingArg;
        if (isSearching === false) return;
        try {
            // 맨 처음 검색 시(초기화) 로딩 화면 표시
            if (isInitialLoad) {
                await setIsShowPlaceholder(true);
                await setResultCount({ total: 0, current: 0 });
                await setIsStopLoad(false); 
            }
            const response = await fetch(`${requestURL.FETCH_ALL_DATA}/${queryString}`, { mode: "cors" });
            const resultJson = await response.json();
            if (resultJson.isEndOfResult) {
                stopQueryFetch(resultJson);
                return;
            }
            const queryResultCount = resultJson.pop();
            setResultCount({ total: queryResultCount.total, current: queryResultCount.current });
            const mappedList = generateMappedList(resultJson);
            setIsShowPlaceholder(false);
            isInitialLoad ? setStayLists([...mappedList]) : setStayLists([...stayLists, ...mappedList]);
            setIsAdditionalLoad(false);
        } catch (err) {
            console.error(err);
        };
    };

    // 패치 요청 중단
    const stopQueryFetch = (resultJson) => {
        isSearching = false;
        setStayLists([...stayLists]);
        setIsStopLoad(true);
        setIsAdditionalLoad(false);
    }

    const generateMappedList = (resultJson) => {
        const mappedList = resultJson.map((infos) => {
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
                <li key={infos['_id']}>
                    <StyledItemsContainer {...itemProps} />
                </li>
            );
        });
        return mappedList;
    };

    const [searchOptionTabUrl, setSearchOptionTabUrl] = useState("");
    const [isPanelClosed, setIsPanelClosed] = useState(true);
    const [isFetching, setIsFetching] = useState(false);

    const handleScroll = (event) => {
        if (!isSearching) {
            return;
        }
        let scrollHeight = document.documentElement.scrollHeight; // 도큐먼트 전체높이
        let pageYOffset = window.pageYOffset; // 바깥으로 스크롤된 도큐먼트 높이 
        let innerHeight = window.innerHeight; // 현재 보이는 도큐먼트 높이

        // 쓰로틀링 
        if (scrollHeight - pageYOffset - innerHeight < 100 && !triggerFetchTimer) {
            setIsAdditionalLoad(true);
            triggerFetchTimer = setTimeout(() => {
                setIsFetching(true);
                increaseNextItemsIdx();
                triggerFetchTimer = null;
            }, OPERATE_FETCH_TIME);
        };
    };

    const increaseNextItemsIdx = () => {
        const template = '&next_items_idx={{}}';
        const regExp = /&next_items_idx=\d+/;
        const increasedNum = Number(queryString.str.match(regExp)[0].match(/\d+/)[0]) + INCREASE_IDX_NUM;
        const nextItemsIdx = template.replace('{{}}', increasedNum);
        queryString.str = queryString.str.replace(regExp, nextItemsIdx);
    };

    // 스크롤 이벤트 등록
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // 스크롤 이벤트 발생시 패치 요청
    useEffect(() => {
        if (!isFetching) return;
        operateContinuousFetch();
    }, [isFetching]);

    const operateContinuousFetch = () => {
        operateFetchQuery(queryString.str, false, isSearching);
        setIsFetching(false);
    };

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
        IsShowPlaceholder: IsShowPlaceholder,
        isAdditionalLoad: isAdditionalLoad,
        isStopLoad: isStopLoad,
        resultCount: resultCount,
    };

    const DimmedSection = styled.div`
        position: fixed;
        top: 140px;
        margin: 0; 
        width: 100%;
        height: 100%; 
        background: white;
        opacity: ${ isDimmed ? 0.8 : 0};
        display: ${ isDimmed ? "block" : "none"};
        z-index: 20;
    `

    return (
        <div onClick={closeSearchOptionPanel} >
            <DimmedSection />
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


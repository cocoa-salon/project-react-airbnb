import React, { useContext } from 'react';
import { FetchQueryContext } from '../Main';
import styled from 'styled-components';
import StyledItemsListUl from './StyledItemsListUl';
import Placeholder from './Placeholder';
import SubPlaceholder from './SubPlaceholder';

const SectionItemsDisplay = () => {
    const fetchQueryContext = useContext(FetchQueryContext);

    const itemsDisplayStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };

    const loadingMsg = {
        wait :`잠시만 기다려주세요...`,
        result : `총 ${fetchQueryContext.resultCount.total}개의 숙박 정보를 검색하였습니다.`,
        end : `끝까지 검색하였습니다.`
    }

    const WaitForLoadingMsg = (props) => <div {...props}>{loadingMsg.wait}</div>
    const ResultOfSearchMsg = (props) => <div {...props}>{loadingMsg.result}</div>
    const EndOfSearchMsg = (props) => <div {...props}>{loadingMsg.end}</div>

    const StyledSearchMsg = styled.div`
        color: rgb(150,150,150);
        font-weight: bold; 
        font-size: 16px;
        text-align: center;

    `;

    return (
        <div style={itemsDisplayStyle}>
            {fetchQueryContext.resultCount.total === 0 ? <StyledSearchMsg as={WaitForLoadingMsg} /> : <StyledSearchMsg as={ResultOfSearchMsg} />}
            {fetchQueryContext.IsShowPlaceholder ? <Placeholder /> :
                <StyledItemsListUl>
                    {fetchQueryContext.stayLists}
                </StyledItemsListUl>
            }
            {fetchQueryContext.isAdditionalLoad ? <SubPlaceholder /> : fetchQueryContext.isStopLoad ? <StyledSearchMsg as={EndOfSearchMsg} /> : null}
        </div>
    );
};

export default SectionItemsDisplay;
import React, { useState } from 'react';
import { Header } from './Header/Header'
import { Sections } from './Sections/Sections';
import { SearchPanel } from './SearchPanels/SearchPanels';

function Main() {
    const [isMouseLeaved, setMouseLeaved] = useState(true);
    const [selectedTabName, setSelectedTabName] = useState('none');


    // 날짜, 인원, 숙소타입, 가격, 즉시예약, 필터추가 탭(검색옵션탭)
    const setSelectedTab = (tabName) => {        
        setSelectedTabName(tabName);
    }

    function handleOnMouseLeave() {
        setMouseLeaved(true); 
    }

    function handleOnMouseEnter() {
        setMouseLeaved(false); 
    }
    
    const closeSearchOptionPanel = () => {
        if(isMouseLeaved === true && selectedTabName !== "none") { 
            setSelectedTabName("none"); 
        }
    }

    return (
        <div onClick={closeSearchOptionPanel}>
            <Header />
            <SearchPanel 
                handleOnMouseLeave={handleOnMouseLeave} 
                handleOnMouseEnter={handleOnMouseEnter} 

                // 날짜, 인원, 숙소타입, 가격, 즉시예약, 필터추가
                selectedTabName={selectedTabName} 

                passSelectedTab={setSelectedTab}
            />
            <Sections />
        </div>
    )
}

export { Main }; 
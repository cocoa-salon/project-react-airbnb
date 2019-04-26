import React, { useState } from 'react';
import { Header } from './Header/Header'
import { Sections } from './Sections/Sections';
import { SearchPanel } from './SearchPanel/SearchPanel';

function Main() {
    const [isMouseLeaved, setMouseLeaved] = useState(true);
    const [selectedTabName, setSelectedTabName] = useState('none');

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
                selectedTabName={selectedTabName} 
                passSelectedTab={setSelectedTab}
            />
            <Sections />
        </div>
    )
}

export { Main }; 
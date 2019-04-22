import React, { useState } from 'react';
import { Header } from './Header/Header'
import { Sections } from './Sections/Sections';
import { SearchPanel } from './SearchPanels/SearchPanels';

function Main() {
    const [isMouseLeaved, setMouseLeaved] = useState(true);
    const [selectedButton, setSelectedButton] = useState('none');

    const passSelectedButton = (name) => {
        setSelectedButton(name);
    }

    function handleOnMouseLeave() {
        setMouseLeaved(true); 
    }

    function handleOnMouseEnter() {
        setMouseLeaved(false); 
    }
    
    const closeSearchOptionPanel = () => {
        if(isMouseLeaved === true && selectedButton !== "none") { 
            setSelectedButton("none"); 
        }
    }

    return (
        <div onClick={closeSearchOptionPanel}>
            <Header />
            <SearchPanel 
                handleOnMouseLeave={handleOnMouseLeave} 
                handleOnMouseEnter={handleOnMouseEnter} 
                selectedButton={selectedButton} 
                passSelectedButton={passSelectedButton}   
            />
            <Sections />
        </div>
    )
}

export { Main }; 
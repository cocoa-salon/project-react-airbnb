import React from 'react';
import { Header } from './Header/Header'
import { Sections } from './Sections/Sections';
import { SearchPanel } from './SearchPanels/SearchPanels';

function Main(props) {
    return (
        <div>
            <Header />
            <SearchPanel />
            <Sections />
        </div>
    )
}

export { Main }; 
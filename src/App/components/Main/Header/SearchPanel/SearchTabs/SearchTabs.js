import React from 'react';
import AllSearchTab from './AllSearchTab';
import StaysSearchTab from './StaysSearchTab';
import ExperiencesSearchTab from './ExperiencesSearchTab';
import RestaurantSearchTab from './RestaurantSearchTab';

import SearchOptionPanels from './SearchOptionPanels/SearchOptionPanels';

export const SearchTabContext = React.createContext();
const { Provider: SearchTabProvider } = SearchTabContext;


function SearchTabs(props) {

    const routerPathId = props.match.params.id;
   
    return (
        <div>
            <SearchTabProvider value={{ match: props.match }}> {
                (routerPathId === "all" && <AllSearchTab />) ||
                (routerPathId === "stays" && <StaysSearchTab />) ||
                (routerPathId === "experiences" && <ExperiencesSearchTab />) ||
                (routerPathId === "restaurants" && <RestaurantSearchTab />)
            }
            </SearchTabProvider>
            <SearchOptionPanels />
        </div>
    )
}

export default SearchTabs; 
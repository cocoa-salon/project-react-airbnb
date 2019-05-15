import React from 'react';
import AllSearchTab from './AllSearchTab';
import InnSearchTab from './InnSearchTab';
import RestaurantSearchTab from './RestaurantSearchTab';
import TripSearchTab from './TripSearchTab';

import SearchOptionPanels from './SearchOptionPanels/SearchOptionPanels';

export const SearchTabContext = React.createContext();
const { Provider: SearchTabProvider } = SearchTabContext;


function SearchTabs(props) {

    const routerPathId = props.match.params.id;
   
    return (
        <div>
            <SearchTabProvider value={{ match: props.match }}> {
                (routerPathId === "all" && <AllSearchTab />) ||
                (routerPathId === "inn" && <InnSearchTab />) ||
                (routerPathId === "trip" && <TripSearchTab />) ||
                (routerPathId === "restaurant" && <RestaurantSearchTab />)
            }
            </SearchTabProvider>
            <SearchOptionPanels />
        </div>
    )
}

export default SearchTabs; 
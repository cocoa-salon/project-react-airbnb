import React from 'react';
import SectionItemsDisplay from './SectionItemsDisplay';
import ScrollToTopOnMount from './ScrollToTopOnMount';

const AllSection = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <SectionItemsDisplay />
        </>
    );
};

export default AllSection;
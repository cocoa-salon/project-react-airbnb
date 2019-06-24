import React from 'react';
import SectionItemsDisplay from './SectionItemsDisplay';
import ScrollToTopOnMount from './ScrollToTopOnMount';

const StaysSection = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <SectionItemsDisplay />
        </>
    );
};

export default StaysSection;
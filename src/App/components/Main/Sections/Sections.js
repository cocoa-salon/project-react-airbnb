import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import MainSection from './MainSection';
import AllSection from './AllSection';
import StaysSection from './StaysSection';
import ExperiencesSection from './ExperiencesSection';
import RestaurentSection from './RestaurentSection';


const Sections = (props) => {

    return (
        <StyledDiv>
            <Route exact path="/" component={MainSection} />
            <Route path="/search/all" component={AllSection} />
            <Route path="/search/stays" component={StaysSection} />
            <Route path="/search/experiences" component={ExperiencesSection} />
            <Route path="/search/restaurants" component={RestaurentSection} />
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    padding: 1rem;
    position: absolute;
    top: 142px;  
    width: 100%;
    height: 100%;
    border: 1px solid rgb(230,230,230);
`
export default Sections;
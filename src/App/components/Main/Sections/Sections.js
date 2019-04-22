import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Sections(props) {
    return (
        <StyledDiv>
            <h3>this is sections area.</h3>
            <Route path="/all" component={AllSection} />
            <Route path="/inn" component={InnSection} />
            <Route path="/trip" component={TripSection} />
            <Route path="/restaurant" component={RestaurentSection} />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    position: relative; 
    width: 100%;
    height: 1000px;
    border: 2px solid grey;
    background: #F0E5DE; 
`

function AllSection({match}) {
    return (
        <div>
            <h3>All section</h3>
        </div>
    )
}

function InnSection({match}) {
    return (
        <h3>Inn section</h3>
    )
}

function TripSection({match}) {
    return (
        <h3>Trip section</h3>
    )
}

function RestaurentSection({match}) {
    return (
        <h3>Restaurant section</h3>
    )
}

export { Sections };
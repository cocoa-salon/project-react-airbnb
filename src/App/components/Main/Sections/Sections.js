import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { ClosePanelContext } from '../Main';

const Sections = (props) => {

    const value = useContext(ClosePanelContext);

    useEffect(() => {
        console.log('loading...'); 
        fetch('http://localhost:8080/search/rooms')
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                let mappedList = response.map((infos) => {
                    return <li key={infos['_id']}>{infos['name']} 가격: {`${infos['price']}원`}, 숙소타입: {`${infos['roomType']}`}, 수용인원: {`${infos['accommodates']}명`}</li>
                });
                value.setStayLists(mappedList);
            })
    }, []);

    return (
        <StyledDiv>
            <Route path="/search/all" render={() => {
                return (
                    <AllSection stayLists={value.stayLists} />
                )
            }} />
            <Route path="/search/inn" render={() => {
                return (
                    <InnSection stayLists={value.stayLists} />
                )
            }} />
            <Route path="/search/trip" component={TripSection} />
            <Route path="/search/restaurant" component={RestaurentSection} />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    padding: 1rem;
    position: relative; 
    width: 100%;
    height: 1000px;
    border: 1px solid rgb(230,230,230);
    background: white; 
`

const AllSection = ({ stayLists }) => {
    return (
        <>
            <h3>All section</h3>
            <ul>{stayLists }</ul>
        </>
    )
}

const InnSection = ({ stayLists }) => {
    return (
        <>
            <h3>Inn section</h3>
            <ul>{stayLists}</ul>
        </>
    )
}

const TripSection = () => {
    return (
        <h3>Trip section</h3>
    )
}

const RestaurentSection = () => {
    return (
        <h3>Restaurant section</h3>
    )
}

export default Sections;
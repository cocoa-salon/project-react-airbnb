import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { FetchQueryContext } from '../Main';
import { StyledItemsContainer, StyledItemsList } from './ItemsList';

const Sections = (props) => {

    const fetchQueryContext = useContext(FetchQueryContext);

    useEffect(() => {
        fetch('http://localhost:8080/search/rooms')
            .then((response) => response.json())
            .then((response) => {
                let mappedList = response.map((infos) => {
                    const itemProps = {
                        className: "items",
                        name: infos['name'],
                        price: infos['price'],
                        propertyType: infos['propertyType'],
                        numberOfReviews: infos['numberOfReviews'],
                        review_scores: infos['review_scores'],
                        image: infos['images']
                    }
                    return (
                        <StyledItemsList key={infos['_id']}>
                            <StyledItemsContainer {...itemProps} />
                        </StyledItemsList>
                    )
                });
                fetchQueryContext.setStayLists(mappedList);
            });
    }, []);

    return (
        <StyledDiv>
            <Route path="/search/all" render={() => {
                return (
                    <AllSection stayLists={fetchQueryContext.stayLists} />
                )
            }} />
            <Route path="/search/inn" render={() => {
                return (
                    <InnSection stayLists={fetchQueryContext.stayLists} />
                )
            }} />
            <Route path="/search/trip" component={TripSection} />
            <Route path="/search/restaurant" component={RestaurentSection} />
        </StyledDiv>
    );
};

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
            <ul style={{ listStyle: "none" }}>{stayLists}</ul>
        </>
    );
};

const InnSection = ({ stayLists }) => {
    return (
        <>
            <h3>Inn section</h3>
            <ul style={{ listStyle: "none" }}>{stayLists}</ul>
        </>
    );
};

const TripSection = () => {
    return (
        <h3>Trip section</h3>
    );
};

const RestaurentSection = () => {
    return (
        <h3>Restaurant section</h3>
    );
};

export default Sections;
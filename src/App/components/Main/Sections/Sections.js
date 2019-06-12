import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { FetchQueryContext } from '../Main';
import { StyledItemsContainer, StyledItemsList } from './ItemsList';
import { requestURL } from '../../../setting_values/setting_values';


const Sections = (props) => {

    const fetchQueryContext = useContext(FetchQueryContext);

    useEffect(() => {
        fetch(`${requestURL.FETCH_ALL_DATA}`, { mode: "cors" })
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
            <Route path="/search/stays" render={() => {
                return (
                    <InnSection stayLists={fetchQueryContext.stayLists} />
                )
            }} />
            <Route path="/search/experiences" component={TripSection} />
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
            <h3>Stays section</h3>
            <ul style={{ listStyle: "none" }}>{stayLists}</ul>
        </>
    );
};

const TripSection = () => {
    return (
        <h3>Experiences section</h3>
    );
};

const RestaurentSection = () => {
    return (
        <h3>Restaurants section</h3>
    );
};

export default Sections;
import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const SubPlaceholder = () => {
    return (
        <Container>
            <ReactLoading type={"bubbles"} color={"rgb(224,224,224)"} height={150} width={100} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export default SubPlaceholder;
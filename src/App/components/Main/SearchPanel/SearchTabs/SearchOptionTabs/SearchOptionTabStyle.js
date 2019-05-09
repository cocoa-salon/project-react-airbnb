import styled from 'styled-components';

const SearchOptionTabStyle = styled.button`
    display: inline-block;
    width: auto;
    height: auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    background: white;
    border: rgb(230,230,230) solid 1px; 
    border-radius: 4px; 
    font-size: 14px; 
    font-weight: thin;
    margin-left: 10px;
    color: rgb(60,60,60); 
    &:hover {
        background: rgb(230,230,230); 
        border-radius: none; 
        outline: 0; 
    }
`

export { SearchOptionTabStyle };
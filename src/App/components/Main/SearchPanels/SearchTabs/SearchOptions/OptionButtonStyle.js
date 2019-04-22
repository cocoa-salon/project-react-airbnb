import styled from 'styled-components';

const StyledOptionButton = styled.button`
    display: inline-block;
    width: 80px; 
    height: 40px;  
    background: white;
    border-radius: 4px; 
    font-size: 16px; 
    margin-left: 10px; 
    &:hover {
        background: #d9e1e8; 
        color: white;
        font-weight: bold; 
        border-radius: none; 
    }
    &:active {
        background: red; 
    }
`

export { StyledOptionButton };
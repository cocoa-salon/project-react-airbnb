import styled from 'styled-components';

export const DeleteApplyStyle = styled.div`
    padding: 10px;
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ApplyButtonStyle = styled.button`
    display: inline-block;
    border-radius: 0%; 
    border: none;
    width: 60px; 
    height:40px;
    margin-left: 10px;
    margin-bottom: 10px;
    outline: none;
    font-size: 16px; 
    cursor: pointer;
`

export const DeleteButtonStyle = styled(ApplyButtonStyle)`
        visibility : ${(props) => props.visible ?
            'visible' : 'hidden'
        };
`
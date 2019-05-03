import React from 'react';
import styled from 'styled-components';

import { OptionTabStyle } from './OptionTabStyle';

import { SearchOptionPanelConsumer } from '../SearchTabs';

function Guest(props) {

    return (
        <SearchOptionPanelConsumer> 
            {  
                (value) => (
                    <OptionTabStyle onMouseLeave={value.handleOnMouseLeave} onMouseEnter={value.handleOnMouseEnter} onClick={value.calculateGuestNum} > 
                        <StyledDiv>
                            <StyledP>성인</StyledP>
                            <StyledButtonDiv>
                                <RemoveAdultButton isButtonActivated={value.isButtonActivated} name="removeAdult">-</RemoveAdultButton>
                                <StyledNumDiv>{value.adultNum} +</StyledNumDiv>
                                <AddAdultButton isButtonActivated={value.isButtonActivated} name="addAdult">+</AddAdultButton>
                            </StyledButtonDiv>
                        </StyledDiv>
                        <StyledDiv>
                            <StyledP>어린이</StyledP>
                            <StyledButtonDiv>
                                <RemoveChildButton isButtonActivated={value.isButtonActivated} name="removeChildren">-</RemoveChildButton>
                                <StyledNumDiv>{value.childNum} +</StyledNumDiv>
                                <AddChildButton isButtonActivated={value.isButtonActivated} name="addChildren">+</AddChildButton>
                            </StyledButtonDiv>
                        </StyledDiv>
                        <StyledDiv>
                            <StyledP>유아</StyledP>
                            <StyledButtonDiv>
                                <RemoveToddlerButton isButtonActivated={value.isButtonActivated} name="removeToddler">-</RemoveToddlerButton>
                                <StyledNumDiv>{value.toddlerNum} +</StyledNumDiv>
                                <AddToddlerButton isButtonActivated={value.isButtonActivated} name="addToddler">+</AddToddlerButton>
                            </StyledButtonDiv>
                        </StyledDiv>
                        <StyledDiv>
                            <StyleResetButton name="reset" style={{ cursor: 'pointer' }} onClick={value.resetGuestNum}>삭제</StyleResetButton>
                        </StyledDiv> 
                    </OptionTabStyle>
                )
            }
        </SearchOptionPanelConsumer>
    )
}


const StyledButton = styled.button`
    display: inline-block;
    border-radius: 50%; 
    width:40px;
    height:40px;
    margin-left: 30px;
    outline: none;
    font-size: 16px; 
`

const StyleResetButton = styled(StyledButton)`
    border-radius: 0%; 
    border: none;
    width: 60px; 
`

const StyledButtonDiv = styled.div`
    flex: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const AddAdultButton = styled(StyledButton)`
    border-color: ${ value => value.isButtonActivated.maxAdult ? "#008c9e" : "#c6e5d9"};
    color : ${ value => value.isButtonActivated.maxAdult ? "#008c9e" : "#c6e5d9"};
`
const RemoveAdultButton = styled(StyledButton)`
    border-color: ${ value => value.isButtonActivated.minAdult ? "#008c9e" : "#c6e5d9"};
    color : ${ value => value.isButtonActivated.minAdult ? "#008c9e" : "#c6e5d9"};
`
const AddChildButton = styled(StyledButton)`
    border-color: ${ value => value.isButtonActivated.maxChild ? "#008c9e" : "#c6e5d9"};
    color : ${ value => value.isButtonActivated.maxChild ? "#008c9e" : "#c6e5d9"};
`
const RemoveChildButton = styled(StyledButton)`
    border-color: ${ value => value.isButtonActivated.minChild ? "#008c9e" : "#c6e5d9"};
    color : ${ value => value.isButtonActivated.minChild ? "#008c9e" : "#c6e5d9"};
`
const AddToddlerButton = styled(StyledButton)`
    border-color: ${ value => value.isButtonActivated.maxToddler ? "#008c9e" : "#c6e5d9"};
    color : ${ value => value.isButtonActivated.maxToddler ? "#008c9e" : "#c6e5d9"};
`
const RemoveToddlerButton = styled(StyledButton)`
    border-color: ${ value => value.isButtonActivated.minToddler ? "#008c9e" : "#c6e5d9"};
    color : ${ value => value.isButtonActivated.minToddler ? "#008c9e" : "#c6e5d9"};
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row; 
    padding: 10px; 
`

const StyledP = styled.p`
    flex: 100px;
`

const StyledNumDiv = styled.div`
    margin-left: 10px; 
`

export { Guest };
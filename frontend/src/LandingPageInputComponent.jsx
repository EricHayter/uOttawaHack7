import React from 'react'
import styled from 'styled-components'
import { Button } from '@shopify/polaris'

const StyledP = styled.p`
    color: grey;
    font-weight: 400;
`

const StyledTitle = styled.h1`
    width: 500px;
    font-size: 40px;
    text-align: center;
`

const StyledInput = styled.input`
    border-radius: 7px;
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
`

const StyledButton = styled(Button)`
    width: 100%;
    margin-top: 10px;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledInputContainer = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const LandingPageInputComponent = () => { 
    const [url, setUrl] = React.useState("Enter the URL of the camera you would like to analyze.");
    return(
        <InputContainer>
            <StyledTitle>Where do you want to look? ✨</StyledTitle>
            <StyledInputContainer>
                <StyledInput 
                    value={url} 
                    onChange={(e)=>setUrl(e.target.value)}
                    onClick={()=>setUrl(" ")}
                />
                <StyledButton>Submit</StyledButton>
            </StyledInputContainer>
            <StyledP>💡We&apos;ll use this URL to connect to the remote camera you want to analyze.</StyledP>
        </InputContainer>
    )
}

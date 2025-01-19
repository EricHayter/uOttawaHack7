import React from 'react';
import styled from 'styled-components';
import { Button } from '@shopify/polaris';
import { TitleCarousel } from "./TitleCarousel";
import { LandingPageBuffer } from "./LandingPageBuffer";
import { ResultsPage } from './ResultsPage';

const StyledP = styled.p`
    color: grey;
    font-weight: 500;
    margin-top: 0.25rem;
`;

export const StyledTitle = styled.h1`
    width: 500px;
    font-size: 30px;
    margin-top: 2rem;
    text-align: center;
`;

const StyledInput = styled.input`
    border-radius: 7px;
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
`;

const StyledButton = styled(Button)`
    width: 100%;
    margin-top: 10px;
`;

const InputContainer = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
    flex-direction: column;
    align-items: center;
`;

const StyledInputContainer = styled.div`
    width: 100%;
    margin-top: 1rem;
    max-width: 500px;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const GetUserUrl = ({url, setUrl, validateUrl}) => {
    return (
        <div>
            <TitleCarousel 
                texts={["is that Bobic? 🐕", "What's happening at home? 🏠", "Meow?! 😺"]} 
                speed={150} 
                pause={2000}
            />
            <InputContainer>
                <StyledTitle>Where do you want to look? ✨</StyledTitle>
                <SubtitleContainer>
                    <StyledInputContainer>
                        <StyledInput 
                            value={url} 
                            onChange={(e) => setUrl(e.target.value)}
                            onClick={() => setUrl(" ")}
                        />
                        <StyledButton
                            onClick={validateUrl}
                        >
                            Submit
                        </StyledButton>
                    </StyledInputContainer>
                    <StyledP>💡We&apos;ll use this URL to connect to the remote camera you want to analyze.</StyledP>
                </SubtitleContainer>
            </InputContainer>
        </div>
    );
};


export const LandingPageInputComponent = () => { 
    const [didSubmit, setDidSubmit] = React.useState(false);
    const [showResults, setShowResults] = React.useState(false);
    const [url, setUrl] = React.useState("Enter the URL of the camera you would like to analyze.");
    
    const validateUrl = () => {
        console.log("Validating URL");
        setDidSubmit(true);
        setTimeout(() => {
            setDidSubmit(false);
            setShowResults(true);
        }, 1750);
    };
    return (
        <>
            {didSubmit && <LandingPageBuffer />}
            {!didSubmit && !showResults && <GetUserUrl url={url} setUrl={setUrl} validateUrl={validateUrl} />}
            {showResults && <ResultsPage url={url} />}
        </>
    );
};

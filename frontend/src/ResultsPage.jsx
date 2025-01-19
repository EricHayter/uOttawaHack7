import styled from "styled-components"
import cat from "/cat.mp4?url"

const StyledContainer = styled.div`
    display: flex;
    flex-direction:column;
    gap: 0.5rem;
`

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 0.5rem;
    justify-content: center;
    gap: 2rem;
    width: 100%;
`

const StyledOption1 = styled.button`
    background-color:rgba(85, 87, 238, 0.86);
    color: white;
    width: 40%;
`
const StyledOption2 = styled.button`
    width: 40%;
        color: white;
    background-color:rgba(216, 109, 8, 0.75);
`

const StyledTitle = styled.h1`
    font-size: 30px;
    font-weight: 500;
    margin-top: 2rem;
`;

const StyledText = styled.p`
    font-size: 15px;
    padding: 0.4rem;
    font-weight: 500;
`;

const VideoContainer = styled.div`
    margin-bottom: 0.5rem;
`


export const ResultsPage=({url})=>{
    console.log(url)
    return(
        <StyledContainer>
        <VideoContainer>
            <StyledTitle>Located Video!</StyledTitle>
            <StyledText>{`The video found at ${url} is shown below! Use the buttons to navigate more options.`}</StyledText>
        </VideoContainer>
            <video controls>
                <source src={cat} type="video/mp4" width="600"/>
            </video>
        <ButtonContainer>
            <StyledOption1>Look for suspicious activities 📢</StyledOption1>
            <StyledOption2>Investigate a new video 🔎</StyledOption2>
        </ButtonContainer>
        </StyledContainer>
    )
}
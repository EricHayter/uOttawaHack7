import {Spinner} from '@shopify/polaris';
import styled from 'styled-components'
import WordCarousel from './WordCarousel';

const SpinnerContainer = styled.div`
margin-top: 0.5rem;
`
export const StyledHeader = styled.h1`
  font-size: 35px;
  font-weight: 450;
  margin-bottom: 4rem;
`

export const LandingPageBuffer=()=> {
    return(
    <SpinnerContainer>
      <WordCarousel values={["Looking for Bobic!", "Who's home?"]}/>
      <Spinner size="large" accessibilityLabel="Spinner example" />
    </SpinnerContainer>);
  }
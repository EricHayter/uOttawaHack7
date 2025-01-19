import React from 'react';
import './App.css';
import { Icon } from '@shopify/polaris';
import { AlertTriangleIcon } from '@shopify/polaris-icons';
import styled from 'styled-components';

// Define styled components
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const BoxWrapper = styled.div`
  background-color: #f0f0f0; /* Grey background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1000px; /* Max width of the box */
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content inside the box */
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center; /* Ensures the title is centered */
  width: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  grid-template-rows: repeat(2, 1fr); /* 2 rows */
  gap: 10px; /* Smaller gap between items */
  justify-items: center;
  width: 100%;
  max-width: 800px;
  margin-top: 20px; /* Adds some space between the title and the grid */
`;

const PhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.8); /* Adjusted scaling */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Placeholder = styled.div`
  width: 100px;
  height: 100px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 0.9rem;
  border-radius: 4px;
`;

function alert() {
  return (
    <div style={{ width: '80px' }}>
      <Icon source={AlertTriangleIcon} tone="base" />
    </div>
  );
}

function App() {
  const photos = [
    { id: 1, description: 'Hazard detected' },
    { id: 2, description: 'Motion detected' },
    { id: 3, description: 'Suspicious activity' },
    { id: 4, description: 'Hazard detected' },
    { id: 5, description: 'Hazard detected' },
    { id: 6, description: 'Suspicious activity' },
  ];

  return (
    <StyledDiv>
      <BoxWrapper>
        <TitleContainer>
          <h1 style={{ fontSize: '3rem' }}>Images of Interest</h1>
          {alert()}
        </TitleContainer>
        <h2>Images that triggered a notification</h2>
        <GridContainer>
          {photos.map((photo) => (
            <PhotoCard key={photo.id}>
              <Placeholder>
                <p>Photo</p>
              </Placeholder>
              <p>{photo.description}</p>
            </PhotoCard>
          ))}
        </GridContainer>
      </BoxWrapper>
    </StyledDiv>
  );
}

export default App;

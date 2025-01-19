import { Icon } from "@shopify/polaris";
import { AlertTriangleIcon } from "@shopify/polaris-icons";
import styled from "styled-components";
import { TitleCarousel } from "./TitleCarousel";
import { useState } from "react";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const BoxWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1000px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10px;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  justify-items: center;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
`;

const PhotoCard = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.7);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const PlaceholderText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

const CarouselText = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
  margin-top: 10px;
`;

const AlertMessage = styled.p`
  font-size: 1rem;
  color: #d9534f;
  font-weight: bold;
`;

const TimeDisplay = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #555;
  margin-top: 10px;
`;

const RedirectButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function Interests() {
  const [view, setView] = useState("interest"); // State to toggle between views

  const interestData = [
    { key: 1, emoji: "⚠️", message: "Inappropriate Content Detected" },
    { key: 2, emoji: "🐾", message: "Scratch Detected" },
    { key: 3, emoji: "💩", message: "Poo/Pee Detected" },
    { key: 4, emoji: "🍴", message: "Eating Detected" },
    { key: 5, emoji: "🧗", message: "Climbing Detected" },
    { key: 6, emoji: "✨", message: "Miscellaneous Activity" },
  ];

  const feelingsData = [
    { key: 1, emoji: "🙀", message: "In Distress!" },
    { key: 2, emoji: "😿", message: "Sad" },
    { key: 3, emoji: "😾", message: "Angry" },
    { key: 4, emoji: "😺", message: "Sound!" },
  ];

  const renderGridContent = (data) =>
    data.map((item) => (
      <PhotoCard key={item.key}>
        <PlaceholderText>{item.emoji}</PlaceholderText>
        <AlertMessage>{item.message}</AlertMessage>
      </PhotoCard>
    ));

  return (
    <StyledDiv>
      <BoxWrapper>
        <TitleContainer>
          <h1 style={{ fontSize: "3rem" }}>
            {view === "interest" ? "Images of Interest" : "How is he feeling?"}
          </h1>
          <div style={{ width: "80px" }}>
            <Icon source={AlertTriangleIcon} tone="base" />
          </div>
        </TitleContainer>
        <CarouselText>
          <TitleCarousel
            style={{ fontSize: "1rem" }}
            texts={["What is he up to?", "What's happening at home?"]}
            speed={150}
            pause={2000}
          />
        </CarouselText>
        <TimeDisplay>
          {view === "interest"
            ? "Last updated: 2025-01-19 14:35:00"
            : "Last updated: 2025-01-19 10:37:06"}
        </TimeDisplay>
        <GridContainer>
          {view === "interest"
            ? renderGridContent(interestData)
            : renderGridContent(feelingsData)}
        </GridContainer>
        <RedirectButton onClick={() => setView(view === "interest" ? "feelings" : "interest")}>
          {view === "interest" ? "How is he feeling?" : "Back to Interests"}
        </RedirectButton>
      </BoxWrapper>
    </StyledDiv>
  );
}

export default Interests;

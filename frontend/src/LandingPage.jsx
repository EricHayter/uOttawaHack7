import { LandingPageInputComponent } from "./LandingPageInputComponent"
import { TitleCarousel } from "./TitleCarousel"

export const LandingPage = () => {
    return (
        <div>
            <TitleCarousel 
                texts={["Check-in with your pets? 🐕", "What's happening at home? 🏠", "Meow?! 😺"]} 
                speed={150} 
                pause={2000}
            />
            <LandingPageInputComponent />
        </div>
    );
};

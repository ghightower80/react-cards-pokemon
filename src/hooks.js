import { useState } from 'react';

// Custom hook for flipping any type of card
function useFlip() {
    const [isFacingUp, setIsFacingUp] = useState(true);

    // Function to toggle the flip state
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };

    // Return the current flip state and the function to toggle it
    return [isFacingUp, flipCard];
}

export default useFlip;

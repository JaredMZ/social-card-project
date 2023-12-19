import { useState } from "react";

// Custom hook to toggle heart icon and manage like count
export const useHeartToggle = (initialState) => {
  const [isSolid, setIsSolid] = useState(initialState);
  const [likeCount, setLikeCount] = useState(7);

  // Function to toggle heart icon and update like count
  const toggleIcon = () => {
    setIsSolid((prevState) => !prevState);
    setLikeCount((prevCount) => (isSolid ? prevCount - 1 : prevCount + 1));
  };

  return [isSolid, likeCount, toggleIcon];
};

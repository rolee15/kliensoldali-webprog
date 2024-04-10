import { createContext, useContext, useState, useEffect } from "react";
import useStoredState from "../hooks/useStoredState";
import { usePairNumber } from "./PairNumber";
import { shuffle } from "lodash";
import { getImages } from "../api/api";

const GameProgressContext = createContext();

function GameProgressProvider({ children }) {
  const { pairNumber } = usePairNumber();

  const [catImages, setCatImages] = useStoredState("catImages");
  const [foundIds, setFoundIds] = useStoredState("foundIds", []);
  const [firstFlipped, setFirstFlipped] = useState(null);
  const [secondFlipped, setSecondFlipped] = useState(null);

  const flip = (idx) => {
    if (firstFlipped === null) {
      setFirstFlipped(idx);
      return;
    }

    if (secondFlipped === null) {
      setSecondFlipped(idx);

      if (catImages[idx].id === catImages[firstFlipped].id) {
        setFoundIds((prevState) => [...prevState, catImages[idx].id]);
        setFirstFlipped(null);
        setSecondFlipped(null);
        return;
      }

      setTimeout(() => {
        setFirstFlipped(null);
        setSecondFlipped(null);
      }, 1500);
    }
  };

  const isFlipped = (idx) => {
    return (
      foundIds.includes(catImages[idx].id) ||
      [firstFlipped, secondFlipped].includes(idx)
    );
  };

  useEffect(() => {
    setFoundIds([]);
    setCatImages(undefined);
    getImages(pairNumber).then((data) => setCatImages(shuffle([...data, ...data])));
  }, [pairNumber, setCatImages, setFoundIds]);

  const context = { catImages, foundIds, flip, isFlipped };

  return (
    <GameProgressContext.Provider value={context}>
      {children}
    </GameProgressContext.Provider>
  );
}

export default GameProgressProvider;

export const useGameProgress = () => useContext(GameProgressContext);

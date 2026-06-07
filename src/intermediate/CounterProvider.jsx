import React, { useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const incrementTwo = () => setCount((prev) => prev + 2);
  const decrementTwo = () => setCount((prev) => prev - 2);

  return (
    <CounterContext.Provider
      value={{ count, increment, decrement, incrementTwo, decrementTwo }}
    >
      {children}
    </CounterContext.Provider>
  );
};

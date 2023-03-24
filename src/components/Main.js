import React, { useState } from "react";
import "../App.css";

function Main({ num, onDecrement }) {
  const [counter, setCounter] = useState(1);
  const [mains, setMains] = useState([]);

  function onIncrement() {
    setCounter((c) => c + 1);
    setMains([
      ...mains,
      [
        <Main
          num={counter}
          key={counter}
          onDecrement={() => removeChild(counter)}
        />,
      counter
      ]
    ]);
  }

  function removeChild(target) {
    setMains((prev) => prev.filter((item) => item[1] !== target));
  }

  return (
    <div className="main">
      <div>{num}</div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      {mains.map((main) => main[0])}
    </div>
  );
}

export default Main;

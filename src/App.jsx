import { useState } from "react";
import "./styles.css";

export default function App() {
  let [counter, setCounter] = useState(0);

  const logicOfAdd = () => {
    if (counter >= 10) {
      return;
    }
    setCounter(counter + 1);
  };

  const LogicOfSub = () => {
    //condition for  Not to go below 0
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h3>Counter={counter}</h3>
      <button onClick={logicOfAdd}>add1</button>
      <button onClick={LogicOfSub}>Sub 1 </button>
      <div>{counter % 2 === 0 ? "Even" : "odd"}</div>
    </div>
  );
}

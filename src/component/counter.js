import React, { useReducer } from "react";
import "./counter.css";

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "plus":
      return { ...state, count: state.count + state.step };
    case "minus":
      return { ...state, count: state.count - state.step };
    case "input":
      return action.payload;
    case "stepPlus":
      return { ...state, step: state.step + action.payload };
    case "stepminus":
      return { ...state, step: state.step - action.payload };
    default:
      throw new Error("Unkown values");
  }
};

const Counter = () => {
  //Multi State Handle
  let stateLists = {
    count: 0,
    step: 0,
  };

  // // Single State Handle
  // let [count, dispatch] = useReducer(reducer, 0);

  //Multi State Handle
  let [state, dispatch] = useReducer(reducer, stateLists);
  let { count, step } = state;

  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(0);

  function stepsPlus() {
    dispatch({ type: "stepPlus", payload: 1 });
    // setStep(step + 1);
  }
  function stepsMinus() {
    dispatch({ type: "stepMinus", payload: -1 });
    // setStep(step - 1);
  }

  function countsplus() {
    dispatch({ type: "plus", payload: 1 });
    // setCount(count + step);
  }
  function countsMinus() {
    dispatch({ type: "minus", payload: -1 });
    // setCount(count - step);
  }
  function handleinput(event) {
    dispatch({ type: "input", payload: Number(event.target.value) });
  }

  let dateval = new Date();

  dateval.setDate(dateval.getDate() + count);

  let currentDay = dateval.toLocaleDateString(undefined, {
    weekday: "long",
  });
  let curentMonth = dateval.toLocaleDateString(undefined, {
    month: "long",
  });
  let curentDate = dateval.toLocaleDateString(undefined, {
    day: "numeric",
  });
  let curentYear = dateval.toLocaleDateString(undefined, {
    year: "numeric",
  });

  let textCount = Math.abs(count);

  return (
    <div className="counter-section">
      <h4>Date Counter</h4>
      <div className="steps">
        <button onClick={stepsMinus}>-</button>
        <h4>
          Steps: <span>{step}</span>
        </h4>
        <button onClick={stepsPlus}>+</button>
      </div>
      <div className="counts">
        <button onClick={countsMinus}>-</button>
        <input type="text" onChange={handleinput} value={count} />

        <button onClick={countsplus}>+</button>
      </div>
      <div className="date-format">
        <p>
          {count >= 0
            ? count === 0
              ? `Today is`
              : `${count} Days from Today is`
            : `${textCount} Days ago was`}{" "}
        </p>
        <b>{currentDay}</b>
        <b>{curentMonth}</b>
        <b> {curentDate}</b>
        <b>{curentYear}</b>
      </div>
    </div>
  );
};

export default Counter;

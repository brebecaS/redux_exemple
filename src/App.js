import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementByOne,
  incrementByOne,
  incrementByValue,
} from "./counterSlice";

function App() {
  // Selection sate from store
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        aria-label="Increment by one"
        onClick={() => {
          dispatch(incrementByOne());
        }}
      >
        Increment
      </button>
      <button
        aria-label="Decrement by one"
        onClick={() => {
          dispatch(decrementByOne());
        }}
      >
        Decrement
      </button>
      <button
        aria-label="Increment by two"
        onClick={() => {
          dispatch(incrementByValue(2));
        }}
      >
        {" "}
        Increment by 2
      </button>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;

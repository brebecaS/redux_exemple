import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementByOne } from "./counterSlice";

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
      <button aria-label="Decrement by one">Decrement</button>
      <button aria-label="Increment by two"> Increment by 2</button>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;

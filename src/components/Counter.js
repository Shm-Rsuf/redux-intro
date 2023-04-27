import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../services/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count : {count}</h3>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default Counter;

/*1. state-> count=0 */
/*2. action-> increment, decrement, reset*/
/* 3.reducer-> 
increment-> count=>count+1, 
decrement-> count=>count-1,
 reset-> count=>0 
 */
/* 4. store */

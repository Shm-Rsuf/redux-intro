const { createStore } = require("redux");

/* declaring constant variables */
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

/* state */
const initialState = {
  count: 0,
};

/* action -> Object -> Tyep, Payload */
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

/* create reducer for counter */
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

/* create store */
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

/* dispatch */
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());

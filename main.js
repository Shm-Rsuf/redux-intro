const redux = require("redux");
const createStore = redux.createStore;

const BUY_ROCKET = "BUY_ROCKET";

function buyRocket() {
  return {
    type: "BUY_ROCKET",
    quantity: 10,
  };
}

const initialState = {
  numOfPasta: 10,
  numOfPizza: 15,
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ROCKET:
      return {
        ...state,
        numOfPasta: state.numOfPasta - 1,
      };

    default:
      return state;
  }
};

const store = createStore(rocketReducer());

console.log(store.getState());

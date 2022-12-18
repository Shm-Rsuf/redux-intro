const redux = require("redux");
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;

/* আমাদের একটা অ্যাকশন লাগবে(which is an Object)। যে এই অ্যাকশন বানাবে তাকে আকশন ক্রিয়েটর বলে ।এটি মুলত একটি ফাংশন */
const BUY_PASTA = "BUY_PASTA";
const RESTOCK_PASTA = "RESTOCK_PASTA";
const BUY_PIZZA = "BUY_PIZZA";
const RESTOCK_PIZZA = "RESTOCK_PIZZA";

function buyPasta(qty = 1) {
  return {
    type: BUY_PASTA,
    quantity: qty,
  };
}
function buyPizz(qty = 1) {
  return {
    type: BUY_PIZZA,
    quantity: qty,
  };
}

function restockPasta(qty = 1) {
  return {
    type: RESTOCK_PASTA,
    quantity: qty,
  };
}

function restockPizz(qty = 1) {
  return {
    type: RESTOCK_PIZZA,
    quantity: qty,
  };
}
/*রিডিউছার ফাংশন এর জন্য দুটি প্যারামিটার লাগবে (initialState, action) । রিডিউছার ফাংশন নিউ স্টেট রিটার্ন করে।*/

const initialState = {
  numOfPasta: 10,
  numOfPizza: 10,
};

const pastaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PASTA:
      return {
        ...state,
        numOfPasta: state.numOfPasta - action.quantity,
      };

    case RESTOCK_PASTA:
      return {
        ...state,
        numOfPasta: state.numOfPasta + action.quantity,
      };

    default:
      return state;
  }
};
const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PIZZA:
      return {
        ...state,
        numOfPizza: state.numOfPizza - action.quantity,
      };

    case RESTOCK_PIZZA:
      return {
        ...state,
        numOfPizza: state.numOfPizza + action.quantity,
      };

    default:
      return state;
  }
};

const multipleReducer = combineReducers({
  pasta: pastaReducer,
  pizza: pizzaReducer,
});

const store = createStore(multipleReducer);
console.log("InitalState", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("UpdatedState", store.getState())
);
store.dispatch(buyPasta(5));
store.dispatch(buyPasta());
store.dispatch(restockPasta(10));
store.dispatch(buyPizz(6));
store.dispatch(restockPizz(11));

unsubscribe();

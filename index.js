const redux = require("redux");
const createStore = redux.createStore;

/* আমাদের একটা অ্যাকশন লাগবে(which is an Object)। যে এই অ্যাকশন বানাবে তাকে আকশন ক্রিয়েটর বলে ।এটি মুলত একটি ফাংশন */
const BUY_PASTA = "BUY_PASTA";

function buyPasta() {
  return {
    type: BUY_PASTA,
    quantity: 10,
  };
}

/*রিডিউছার ফাংশন এর জন্য দুটি প্যারামিটার লাগবে (initialState, action) । রিডিউছার ফাংশন নিউ স্টেট রিটার্ন করে।*/

const initialState = {
  numOfPasta: 15,
  numOfPizza: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PASTA:
      return {
        ...state,
        numOfPasta: state.numOfPasta - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("InitalState", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("UpdatedState", store.getState())
);
store.dispatch(buyPasta());
store.dispatch(buyPasta());
store.dispatch(buyPasta());
store.dispatch(buyPasta());
store.dispatch(buyPasta());

unsubscribe();

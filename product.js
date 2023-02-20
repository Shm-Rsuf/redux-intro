const redux = require("redux");
const createStore = redux.createStore;

//action creator/machine/function
const BUY_PRODUCT = "BUY_PRODUCT";
function buyProduct() {
  return {
    type: BUY_PRODUCT,
    qnt: 2,
  };
}

const initialState = {
  numOfProduct: 25,
};

// (previousState, action)==>newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCT:
      return {
        ...state,
        numOfProduct: state.numOfProduct - 3,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("initialState", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(buyProduct());
store.dispatch(buyProduct());
store.dispatch(buyProduct());
store.dispatch(buyProduct());
store.dispatch(buyProduct());

unsubscribe();

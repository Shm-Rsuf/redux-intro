const redux = require("redux");
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;

// action creator function
const BUY_PRODUCT = "BUY_PRODUCT";
const RESTOKE_PRODUCT = "RESTOKE_PRODUCT";
const BUY_FOOTBALL = "BUY_FOOTBALL";
const RESTOKE_FOOTBALL = "RESTOKE_FOOTBALL";

function buyProduct(qtn = 3) {
  return {
    type: BUY_PRODUCT,
    qtn,
  };
}

function restokeProduct(qtn = 5) {
  return {
    type: RESTOKE_PRODUCT,
    qtn,
  };
}

function buyFootball(qtn = 5) {
  return {
    type: BUY_FOOTBALL,
    qtn,
  };
}

function restokeFootball(qtn = 3) {
  return {
    type: RESTOKE_FOOTBALL,
    qtn,
  };
}
//initialState
const initialState = {
  numOfProduct: 30,
  numOfFootball: 30,
};

//reducer function(previousState, action)==> newState
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCT:
      return {
        ...state,
        numOfProduct: state.numOfProduct - action.qtn,
      };

    case RESTOKE_PRODUCT:
      return {
        ...state,
        numOfProduct: state.numOfProduct + action.qtn,
      };

    default:
      return state;
  }
};

//football reducer function
const footballReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_FOOTBALL:
      return {
        ...state,
        numOfFootball: state.numOfFootball - action.qtn,
      };

    case RESTOKE_FOOTBALL:
      return {
        ...state,
        numOfFootball: state.numOfFootball + action.qtn,
      };

    default:
      return state;
  }
};

const multipleReducer = combineReducers({
  football: footballReducer,
  product: productReducer,
});

const store = createStore(multipleReducer);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(buyFootball(10));
store.dispatch(buyProduct(25));
store.dispatch(restokeFootball(20));
store.dispatch(restokeProduct(35));

unsubscribe();

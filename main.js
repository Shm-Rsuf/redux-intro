const { createStore, combineReducers } = require("redux");
/* products constant */
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

/* carts constant */
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART = "ADD_CART";

//products state
const initialProducts = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

//products state
const initialCarts = {
  cart: ["sugar"],
  numberOfProducts: 1,
};

//products action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

//cart action
const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

const addCart = (value) => {
  return {
    type: ADD_CART,
    payload: value,
  };
};

//products reducer
const productReducer = (state = initialProducts, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

//cart reducer
const cartReducer = (state = initialCarts, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };

    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct("oil"));

store.dispatch(addCart("banana"));

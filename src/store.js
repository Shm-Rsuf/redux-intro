const { createStore } = require("redux");
const {
  default: counterReducer,
} = require("./services/reducers/counterReducer");

const store = createStore(counterReducer);

export default store;

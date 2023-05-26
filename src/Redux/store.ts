
import {
    combineReducers,
    applyMiddleware,
    legacy_createStore as createStore,
  } from "redux";
  import { composeWithDevTools } from "redux-devtools-extension";
  import thunk from "redux-thunk";
  import TodoReducer from "./reducers/todoReducers";
  const reducer = combineReducers({
    Todo: TodoReducer,
  });
  
  const initialState = {};
  
  const middleware = [thunk];
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;
  
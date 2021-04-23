import PostsReducer from './reducers/posts.reducer';
import UsersReducer from './reducers/users.reducer';
import AuthReducer from './reducers/auth.reducer';
import ToasterReducer from './reducers/toaster.reducer';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger/src";

const store = createStore(
  combineReducers({
    PostsReducer,
    UsersReducer,
    AuthReducer,
    ToasterReducer
  }),
  applyMiddleware(logger)
);

export default store;
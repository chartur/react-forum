import PostsReducer from './reducers/posts.reducer';
import UsersReducer from './reducers/users.reducer';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger/src";

const store = createStore(
  combineReducers({
    PostsReducer,
    UsersReducer
  }),
  applyMiddleware(logger)
)

export default store;
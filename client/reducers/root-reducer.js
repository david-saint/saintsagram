import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// Import state-reducers
import postsReducer from './posts-reducer';
import commentsReducer from './comments-reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  routing: routerReducer,
});

export default rootReducer;

/* This file is a container */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Import the action creators
import * as postsActionCreators from '../actions/posts';
import * as commentsActionCreators from '../actions/comments';
// The Component we are connecting to
import Main from './Main';

const actionCreators = { ...postsActionCreators, ...commentsActionCreators };

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/types';

const singleCommentReducer = (comment = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...comment, {
        user: action.payload.author,
        text: action.payload.comment
      }];

    case REMOVE_COMMENT:
      return [
        ...comment.slice(0, action.payload.i),
        ...comment.slice(action.payload.i + 1)
      ];

    default:
      return comment;
  }
};

// Anytime the action has a post Id use single comment reducer on the post
const commentsReducer = (comments = {}, action) => {
  if (action.payload && typeof action.payload.postId !== 'undefined') {
    return {
      ...comments,
      [action.payload.postId]: singleCommentReducer(comments[action.payload.postId], action)
    };
  }
  return comments;
}

export default commentsReducer;

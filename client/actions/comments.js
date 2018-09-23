import { ADD_COMMENT, REMOVE_COMMENT } from './types';

export function addComment(postId, author, comment) {
  return {
    type: ADD_COMMENT,
    payload: {
      postId,
      author,
      comment,
    },
  };
}

export function removeComment() {
  return {
    type: REMOVE_COMMENT,
    payload: {
      i,
      postId,
    },
  };
}

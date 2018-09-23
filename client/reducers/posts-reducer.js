import { INCREMENT_LIKES } from '../actions/types';

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case INCREMENT_LIKES:
      return [
        ...posts.slice(0, action.payload.index), // |all the posts before the one we are updating|
        {...posts[action.payload.index], likes: posts[action.payload.index].likes + 1},
        ...posts.slice(action.payload.index + 1), // |all the posts after the one we are updating|
      ];
    default:
      return posts;
  }
};

export default postsReducer;

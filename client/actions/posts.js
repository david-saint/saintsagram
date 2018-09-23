import { INCREMENT_LIKES } from './types';

export function like(index) {
  return {
    type: INCREMENT_LIKES,
    payload: { index },
  };
}

import { USERS_SET } from './actionTypes';

const initialState = {};

function byId(state = {}, payload) {
  const { uid } = payload;
  return { ...state, [uid]: {...payload} };
}

function allIds(state = [], id) {
  return [...state, id];
}

export default function reducer(state = initialState, action) {
  const { type, ...payload } = action;

  switch (type) {
    case USERS_SET:
      return {
        /* ...state, */
        byId: byId(state.byId, payload),
        allIds: allIds(state.allIds, payload.uid),
      };

    default: 
      return state;
  }
}

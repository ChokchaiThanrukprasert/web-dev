import {CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT} from "../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    // Trigger when posting new tuit.
    case CREATE_TUIT:
      return [...state, action.newTuit];

    // Triggered when deleting a tuit.
    case DELETE_TUIT:
      return state.filter(tuit => tuit._id !== action.tuit._id);

    // Triggered when like a tuit.
    case UPDATE_TUIT:
      return state.map(tuit => tuit._id === action.tuit._id ?
        action.tuit : tuit);

    case FIND_ALL_TUITS:
      return action.tuits;

    default:
      return state;
  }
}


export default tuitsReducer;
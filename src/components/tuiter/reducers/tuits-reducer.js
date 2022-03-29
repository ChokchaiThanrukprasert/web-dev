import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
  switch (action.type) {
    // Trigger when posting new tuit.
    case 'create-tuit':
      const newTuit = {
        tuit: action.tuit,
        _id: (new Date()).getTime() + '',
        postedBy: {
          "username": "Doggo Corgi"
        },
        handle: "doggoCorgi",
        "avatar-image": "/images/corgi.jpg",
        stats: {
          retuits: 111,
          likes: 222,
          comments: 333
        },
        liked: false
      }
      return [newTuit, ...state];

    // Triggered when deleting a tuit.
    case 'delete-tuit':
      return state.filter(tuit => tuit._id !== action.tuit._id);

    // Triggered when like a tuit.
    case 'like-tuit':
      return state.map(tuit => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            tuit.stats.likes--;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      });

    default:
      return tuits
  }
}


export default tuitsReducer;
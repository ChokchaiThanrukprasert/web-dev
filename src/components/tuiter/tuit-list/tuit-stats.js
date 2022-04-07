import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const onlike = () => {
    const prevStats = tuit.stats;
    const newStats = {...prevStats, likes: prevStats.likes + 1};
    updateTuit(dispatch, {...tuit, stats: newStats});
  }

  const onDislike = () => {
    const prevStats = tuit.stats;
    const newStats = {...prevStats, dislikes: prevStats.dislikes + 1};
    updateTuit(dispatch, {...tuit, stats: newStats});
  }

  return (
    <div className="row mt-3">
      {/* Comment */}
      <div className="col-3">
        <i className="fa-regular fa-comment me-2"></i>
        {tuit.stats && tuit.stats.comments}
      </div>

      {/* Retweet */}
      <div className="col-3">
        <i className="fa-solid fa-retweet me-2"></i>
        {tuit.stats && tuit.stats.retuits}
      </div>

      {/* Like */}
      <div className="col-3">
        <button className="btn bg-transparent p-0 text-white" onClick={onlike}>
          <i className="me-2 fa-regular fa-thumbs-up"></i>
          {tuit.stats && tuit.stats.likes}
        </button>
      </div>

      {/* Dislike */}
      <div className="col-3">
        <button className="btn bg-transparent p-0 text-white" onClick={onDislike}>
          <i className="me-2 fa-regular fa-thumbs-down"></i>
          {tuit.stats && tuit.stats.dislikes}
        </button>
      </div>
    </div>
  );
}

export default TuitStats;
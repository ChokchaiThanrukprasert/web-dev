import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
    console.log("liked!");
  };

  return (
    <div className="row mt-3">
      {/* Comment */}
      <div className="col-3">
        <i className="fa-regular fa-comment me-2"></i>
        {tuit.stats.comments}
      </div>

      {/* Retweet */}
      <div className="col-3">
        <i className="fa-solid fa-retweet me-2"></i>
        {tuit.stats.retuits}
      </div>

      {/* Like */}
      <div className="col-3">
        <button className="btn bg-transparent p-0" onClick={likeTuit}>
          <i className={"me-2 fa-heart " + (tuit.liked? "fa-solid text-danger":"fa-regular")}></i>
          {tuit.stats.likes}
        </button>
      </div>

      {/* Share */}
      <div className="col-3">
        <i className="fa-solid fa-up-right-from-square"></i>
      </div>
    </div>
  );
}

export default TuitStats;
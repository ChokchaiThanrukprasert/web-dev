import React from "react";
import "./tuit-list-item.css";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

const TuitListItem = (args) => {
  const tuit = args.tuit;
  const dispatch = useDispatch();
  const deleteTuit = tuit => dispatch({type: 'delete-tuit', tuit});

  return (
    <li className="list-group-item p-3">
      <div className="row gx-3">
        {/* Poster avatar */}
        <div className="col-auto">
          <img src={tuit["avatar-image"]}
               className="wd-user-image text-wrap"
               alt={tuit.postedBy.username} />
        </div>

        <div className="col">
          <div className="row">
            {/* Tuit poster */}
            <div className="col">
              <span className="fw-bold">{tuit.postedBy.username}</span>
              <span className="fa-stack fa-2xs">
                <i className="fa-solid fa-circle fa-stack-2x"></i>
                <i className="fa-solid fa-check fa-stack-1x fa-inverse text-black"></i>
              </span>
              <span className="text-secondary">@{tuit.handle}</span>
            </div>

            {/* Delete tuit button*/}
            <div className="col-auto">
              <button type="button" className="btn bg-transparent p-0" onClick={() => deleteTuit(tuit)}>
                <i className="fas fa-remove fa-1x"></i>
              </button>

            </div>
          </div>

          {/* Tuit message */}
          <div className="mb-3">
            {tuit.tuit}
          </div>

          {/* Tuit image (if provided) */}
          {tuit.attachments && tuit.attachments.image &&
            <img className="wd-rounded-16px w-100" src={tuit.attachments.image} alt={tuit.topic} />}

          {/* Tuit video (if provided) */}
          {tuit.attachments && tuit.attachments.video &&
            <div className="wd-tuit-video-container wd-rounded-16px">
              <iframe className="wd-tuit-video"
                      src={"https://www.youtube.com/embed/" + tuit.attachments.video}
                      title="YouTube video player"
                      frameBorder="0" allowFullScreen></iframe>
            </div>}

          {/* Tuit status bar */}
          <TuitStats tuit={tuit}/>
        </div>
      </div>
    </li>
  );
}

export default TuitListItem;
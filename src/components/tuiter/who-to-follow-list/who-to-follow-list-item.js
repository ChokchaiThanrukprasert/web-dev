import React from "react";
import "./who-to-follow-list-item.css";

const WhoToFollowListItem = ({
                               who = {
                                 avatarIcon: '/images/nasa.svg',
                                 userName: 'NASA',
                                 handle: 'NASA',
                               }
                             }
) => {
  return (
    <li className="list-group-item">
      <div className="row gx-2">
        <div className="col-auto">
          <img src={who.avatarIcon} className="wd-user-image" alt="avatar icon" />
        </div>
        <div className="col">
          <div className="fw-bold">
            {who.userName}
            <span className="fa-stack fa-2xs">
              <i className="fa-solid fa-circle fa-stack-2x"></i>
              <i className="fa-solid fa-check fa-stack-1x fa-inverse"></i>
            </span>
          </div>
          <div className="wd-secondary-text">@{who.handle}</div>
        </div>
        <div className="col-auto d-flex align-items-center">
          <button className="btn btn-primary rounded-pill">Follow</button>
        </div>
      </div>
    </li>
  );
};

export default WhoToFollowListItem;
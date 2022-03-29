import React from "react";
import {Link, NavLink} from "react-router-dom";

const NavigationSidebar = ({
                             active = 'explore'
                           }
) => {
  return (
    <>
      <div className="list-group">
        <Link to="/" className="list-group-item list-group-item-action">
          <i className="fab fa-twitter"></i>
        </Link>

        {/* Home */}
        <NavLink to="/tuiter" end
           className="list-group-item list-group-item-action">
          <i className="fa-solid fa-house-chimney"></i>
          <span className="d-none d-xl-inline ps-1">Home</span>
        </NavLink>

        {/* Explore */}
        <NavLink to="/tuiter/explore"
           className="list-group-item list-group-item-action">
          <i className="fa-solid fa-hashtag"></i>
          <span className="d-none d-xl-inline ps-1">Explore</span>
        </NavLink>

        {/* Notifications */}
        <NavLink to="/tuiter/notifications"
           className="list-group-item list-group-item-action">
          <i className="fa-solid fa-bell"></i>
          <span className="d-none d-xl-inline ps-1">Notifications</span>
        </NavLink>

        {/* Messages */}
        <NavLink to="/tuiter/messages"
           className="list-group-item list-group-item-action">
          <i className="fa-solid fa-envelope"></i>
          <span className="d-none d-xl-inline ps-1">Messages</span>
        </NavLink>

        {/* Bookmarks */}
        <NavLink to="/tuiter/bookmarks"
           className="list-group-item list-group-item-action">
          <i className="fa-solid fa-bookmark"></i>
          <span className="d-none d-xl-inline ps-1">Bookmarks</span>
        </NavLink>

        {/* Lists */}
        <NavLink to="/tuiter/lists"
           className="list-group-item list-group-item-action">
          <i className="fa-solid fa-list"></i>
          <span className="d-none d-xl-inline ps-1">Lists</span>
        </NavLink>

        {/* Profile */}
        <NavLink to="/tuiter/profile"
           className="list-group-item list-group-item-action">
          <i className="fa-solid fa-user"></i>
          <span className="d-none d-xl-inline ps-1">Profile</span>
        </NavLink>

        {/* More */}
        <NavLink to="/tuiter/more"
           className="list-group-item list-group-item-action">
                <span className="fa-stack fa-2xs">
                  <i className="fa-solid fa-circle fa-stack-2x"></i>
                  <i className="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>
                </span>
          <span className="d-none d-xl-inline">More</span>
        </NavLink>
      </div>

      <div className="d-grid mt-2">
        <Link to="/tuiter/tweet" className="btn btn-primary btn-block rounded-pill">
          Tweet</Link>
      </div>
    </>
  );
}

export default NavigationSidebar;

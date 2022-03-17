import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                             active = 'explore'
                           }
) => {
  const isActive = (link, active) => {
    return (link === active) ? "active" : "";
  }

  return (
    <>
      <div className="list-group">
        <Link to="/" className="list-group-item list-group-item-action">
          <i className="fab fa-twitter"></i>
        </Link>

        {/* Home */}
        <Link to="/tuiter/home"
           className={`list-group-item list-group-item-action ${isActive('home', active)}`}>
          <i className="fa-solid fa-house-chimney"></i>
          <span className="d-none d-xl-inline ps-1">Home</span>
        </Link>

        {/* Explore */}
        <Link to="/tuiter/explore"
           className={`list-group-item list-group-item-action ${isActive('explore', active)}`}>
          <i className="fa-solid fa-hashtag"></i>
          <span className="d-none d-xl-inline ps-1">Explore</span>
        </Link>

        {/* Notifications */}
        <Link to=""
           className={`list-group-item list-group-item-action ${isActive('notifications', active)}`}>
          <i className="fa-solid fa-bell"></i>
          <span className="d-none d-xl-inline ps-1">Notifications</span>
        </Link>

        {/* Messages */}
        <Link to=""
           className={`list-group-item list-group-item-action ${isActive('messages', active)}`}>
          <i className="fa-solid fa-envelope"></i>
          <span className="d-none d-xl-inline ps-1">Messages</span>
        </Link>

        {/* Bookmarks */}
        <Link to=""
           className={`list-group-item list-group-item-action ${isActive('bookmarks', active)}`}>
          <i className="fa-solid fa-bookmark"></i>
          <span className="d-none d-xl-inline ps-1">Bookmarks</span>
        </Link>

        {/* Lists */}
        <Link to=""
           className={`list-group-item list-group-item-action ${isActive('lists', active)}`}>
          <i className="fa-solid fa-list"></i>
          <span className="d-none d-xl-inline ps-1">Lists</span>
        </Link>

        {/* Profile */}
        <Link to=""
           className={`list-group-item list-group-item-action ${isActive('profile', active)}`}>
          <i className="fa-solid fa-user"></i>
          <span className="d-none d-xl-inline ps-1">Profile</span>
        </Link>

        {/* More */}
        <Link to=""
           className={`list-group-item list-group-item-action ${isActive('more', active)}`}>
                <span className="fa-stack fa-2xs">
                  <i className="fa-solid fa-circle fa-stack-2x"></i>
                  <i className="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>
                </span>
          <span className="d-none d-xl-inline">More</span>
        </Link>
      </div>

      <div className="d-grid mt-2">
        <Link to="/tuiter/tweet" className="btn btn-primary btn-block rounded-pill">
          Tweet</Link>
      </div>
    </>
  );
}

export default NavigationSidebar;

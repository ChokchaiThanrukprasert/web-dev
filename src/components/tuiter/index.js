import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import whoReducer from "./reducers/who-reducer";
import {combineReducers, createStore} from "redux";
import WhoToFollowList from "./who-to-follow-list";
import {Provider} from "react-redux";
import {Outlet} from "react-router-dom";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";

const reducer = combineReducers({
  tuits: tuitsReducer, who: whoReducer, profile: profileReducer
});
const store = createStore(reducer);

const Tuiter = () => {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div className="col-10 col-lg-7 col-xl-6">
          <Outlet />
        </div>
        <div className="d-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  )
};

export default Tuiter;

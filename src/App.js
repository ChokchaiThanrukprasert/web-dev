import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/tuiter/home-screen";
import ExploreScreen from "./components/tuiter/explore-screen";
import ProfileScreen from "./components/tuiter/profile-screen";
import EditProfile from "./components/tuiter/profile-screen/edit-profile";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index
                   element={<Labs />} />
            <Route path="labs"
                   element={<Labs />} />
            <Route path="hello"
                   element={<HelloWorld />} />
            <Route path="tuiter"
                   element={<Tuiter />}>
              <Route index
                     element={<HomeScreen />} />
              <Route path="explore"
                     element={<ExploreScreen />} />
              <Route path="profile"
                     exact
                     element={<ProfileScreen />} />
              <Route path="profile/edit"
                     exact
                     element={<EditProfile />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

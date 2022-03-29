import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./redux-examples";

const Index = () => {
  return (
    <div>
      <h1>Labs</h1>
      {/* Link to tuiter */}
      <p>
        <Link to="/hello">Hello</Link> |
        <Link to="/tuiter">Tuiter</Link>
      </p>

      <ReduxExamples />
    </div>
  )
};

export default Index;

import React from "react";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";
import {Link} from "react-router-dom";

const Index = () => {
  return (
    <div>
      <h1>Labs</h1>
      <p>
        <Link to="/hello">Hello</Link> |
        <Link to="/tuiter/home">Tuiter</Link>
      </p>
      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
    </div>
  )
};

export default Index;

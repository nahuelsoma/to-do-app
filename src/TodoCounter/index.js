import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  if (!!loading) {
    return <h2 className="TodoCounter TodoCounter__loading">Loading...</h2>;
  } else {
    if (totalTodos) {
      return (
        <h2 className="TodoCounter">
          {completedTodos} of {totalTodos} tasks completed
        </h2>
      );
    } else {
      return <h2 className="TodoCounter">You have no pending tasks</h2>;
    }
  }
}

export { TodoCounter };

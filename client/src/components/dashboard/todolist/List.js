import React, { Fragment, useEffect, useState } from "react";

import TodoEdit from "./Edit";

const TodoList = ({allTodos, setTodosChange}) => {
  const [todos, setTodos] = useState([]);

  //delete todo function
  const deleteTodo = async id => {
    try {
        await fetch(`http://localhost:5000/dashboard/todos/${id}`, {
        method: "DELETE",
        headers: { jwt_token: localStorage.jwt_token }
      });

      // setTodosChange(true);
      // setTodos(todos.filter(todo => todo.id !== id));
      window.location = "/dashboard";
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    setTodos(allTodos);
  }, [allTodos]);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Todo Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <TodoEdit todo={todo} setTodosChange={setTodosChange}/>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Done
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TodoList;
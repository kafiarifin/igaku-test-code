import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";

const TodoCreate = ({setTodosChange}) => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    
    try {
      const body = { description };

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.jwt_token);

      const response = await fetch("http://localhost:3005/dashboard/todos", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      });
      
      toast.error(await response.json());
      setTodosChange(true);
      setDescription("");
      // window.location = "/dashboard";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
          <div class="input-group">
            <input
              type="text"
              className="form-control"
              value={description}
              placeholder="Type your task..."
              onChange={e => setDescription(e.target.value)}
            />
            <div class="input-group-append">
              <button className="btn btn-info">Add</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default TodoCreate;
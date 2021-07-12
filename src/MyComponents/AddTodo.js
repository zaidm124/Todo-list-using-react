import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container">
      <h3 className="text-center">Add a todo!!</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="title" className="form-label">
            Todo Title
          </label>
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label for="desc" className="form-label">
            Todo Description
          </label>
          <input
            required
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

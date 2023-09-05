import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
const users = [];
const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = { name: { name }, age: { age } };
    users.push(input);
    console.log(users);
  };

  return (
    <div style={{ width: "400px", margin: "60px auto" }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleName}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleAge}
          />
        </div>
        <div className="d-flex justify-content-center ">
          <button
            type="submit"
            className="btn btn-primary d-flex justify-content-center col-6 "
          >
            Add
          </button>
        </div>
        <div>
          {users.map((users) => (
            <p>User : {users.name}</p>
          ))}
        </div>
      </form>
    </div>
  );
};
export default App;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header = "Access-Control-Allow-Orgin";
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://62f073fe57311485d13112cd.mockapi.io/crudpharma", {
        name: name,
        email: email,
        header: header,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h3 className="p-2">Create</h3>
        <Link to="/read">
          <button className="btn btn-sm btn-success">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

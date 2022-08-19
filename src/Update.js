import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import Read from "./Read";
export default function Update() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    // alert("");
    axios
      .put(`https://62f073fe57311485d13112cd.mockapi.io/crudpharma/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <h1>Update Data</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Submit
        </button>
        <Link to="/read">
          <button type="submit" className=" m-3 btn btn-secondary">
            Back
          </button>
        </Link>
      </form>
    </>
  );
}

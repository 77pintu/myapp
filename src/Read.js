import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Read() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://62f073fe57311485d13112cd.mockapi.io/crudpharma"
    );
    console.log(response.data);
    setData(response.data);
  };
  const handleDelete = (id) => {
    // alert(id);
    axios
      .delete(`https://62f073fe57311485d13112cd.mockapi.io/crudpharma/${id}`)
      .then(() => {
        getData();
      });

    //   .then(() => confirm("Are you sure you want to delete"));
  };
  const setLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <div class="form-check form-switch">
          <input className="form-check-input" type="checkbox" />
        </div>
        <h4>Read operation</h4>
        <Link to="/">
          <button className="btn btn-info">Create Data</button>
        </Link>
      </div>
      <table className={`table`}>
        {/* <caption>Read operations</caption> */}
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const { id, name, email } = item;
            return (
              //   <>
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        setLocalStorage(id, name, email);
                      }}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              //   </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

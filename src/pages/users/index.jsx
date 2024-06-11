import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Index = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
      )
      .then((response) => {
        setUsers(response.data);
      });
  }, [page, limit]);
  const changePage = (type) => {
    if (type === "prev") {
      if (page > 1) {
        setPage((prev) => prev - 1);
      }
    } else {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <>
      <div className="select-wrapper">
        <select
          className="table-select"
          onChange={(e) => setLimit(e.target.value)}
        >
          <option value="select-limit">
            Select limit
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Company Name</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address.city}</td>
              <td>{item.company.name}</td>
              <td>{item.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btn-wrapper">
        <button className="btn-change" onClick={() => changePage("prev")}>
          Prev
        </button>
        <p className="text-btn">{page}</p>
        <button className="btn-change" onClick={() => changePage("next")}>
          Next
        </button>
      </div>
    </>
  );
};

export default Index;

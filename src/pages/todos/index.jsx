import { useEffect } from "react";
import axios from "axios";

import "./index.css";
import { useState } from "react";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
      )
      .then((response) => {
        setTodos(response.data);
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
          <option value="select-limit">Select limit</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <ul className="posts__list">
        {todos.map((item, index) => (
          <li key={index} className="posts__item">
            <span className="posts-item__id">{item.id}</span>
            <h2 className="posts-item__title">{item.title}</h2>
            <p className="posts-item__completed">{item.completed}</p>
          </li>
        ))}
      </ul>
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

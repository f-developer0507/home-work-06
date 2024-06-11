import TextField from "@mui/material/TextField";
import SnackbarWithDecorators from "../../components/notification/notification";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [open, setOpen] = useState(false);

  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    const { userName, userPassword } = form;
    if (userName === "admin" && userPassword === "123") {
      setOpen(true);
      setType("success");
      setTitle("Success");
      setTimeout(() => {
        navigate("/main");
      }, 1000);
    } else {
      setOpen(true);
      setType("danger");
      setTitle("Erorr!");
    }
  };
  return (
    <div className="container">
      <SnackbarWithDecorators open={open} setOpen={setOpen} title={title} type={type}/>
      <div className="row mt-3">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <form id="submit" onSubmit={handleSumbit}>
                <TextField
                  onChange={handleChange}
                  fullWidth
                  label="User Name"
                  id="userName"
                  name="userName"
                  type="text"
                  required
                  autoComplete="off"
                />
                <TextField
                  onChange={handleChange}
                  fullWidth
                  label="Password"
                  id="password"
                  name="userPassword"
                  type="password"
                  required
                />
              </form>
            </div>
            <div className="card-footer">
              <button type="submit" form="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

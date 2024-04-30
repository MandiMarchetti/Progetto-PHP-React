import React from "react";
import "./login.css";
import { Axios } from "axios";
import { useState } from "react";

// const LoginPage = () => {
//   const initialvalues = {
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
//   };
//   const [input, setInput] = useState(initialvalues);
//   const display = () => console.log(input);

//   const handleChange = (e) => {
//     setData({
//       ...input,
//       [e.target.name]: e.target.value,
//       [e.target.phone]: e.target.value,
//       [e.target.email]: e.target.value,
//       [e.target.password]: e.target.value,
//     });
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const data = await axios.post("http://http://localhost/progetto-finalle/server/api.php");
//   if (data.status === 200) {
//     alert("Login Successful");
//   } else {
//     alert("Login Failed");
//   }
// };

function LoginPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    Axios.post("http://localhost3000/register", {
      name: name,
      phone: phone,
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <body>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label for="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input type="email" className="form-style" placeholder="Email" name="email" />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="password" className="form-style" placeholder="Password" name="password" />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" className="btn mt-4">
                            Login
                          </a>
                          <p className="mb-0 mt-4 text-center">
                            <a href="#" className="link">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* ------------------- SING IN ------------- */}
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <form method="POST">
                            <h4 className="mb-3 pb-3">Sign Up</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-style"
                                placeholder="Full Name"
                                name="name"
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="tel"
                                className="form-style"
                                placeholder="Phone Number"
                                name="phone"
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                }}
                              />
                              <i className="input-icon uil uil-phone"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="email"
                                className="form-style"
                                placeholder="Email"
                                name="email"
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                className="form-style"
                                placeholder="Password"
                                name="password"
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button className="btn mt-4" onClick={register}>
                              Register
                            </button>
                            {/* <a href="#" className="btn mt-4">
                              Register
                            </a> */}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default LoginPage;

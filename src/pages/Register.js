import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout";
import AuthService from "../Services/auth-service.js";
import { Navigate } from "react-router-dom";
import { Button } from "reactstrap";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef(null);
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const onClick1 = () => {
    navigate("/login");
  };
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    // form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
    navigate("/login");
  };
  const {log}=console;
  return (
    <div className="register_container">
    <div className="registerpage">
        {log(Input)}
      <Form onSubmit={handleRegister} ref={form}>
        <div className="box1 ">
          <div className="forms1">
            <h2>Sign Up</h2>
            <div className="form_group">
             
              <Input
                type="text"
                name="username"
                value={username}
                placeholder="username"
                onChange={onChangeUsername}
                validations={[required, vusername]}
              />
            </div>
            <div className="form_group" mb='5'>
              
              <input
                type="email"
                name="email"
                value={email}
                placeholder="email"
                onChange={onChangeEmail}
                validations={[required, validEmail]}
              />
            </div>
            <div className="form_group">
              
              <input
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={onChangePassword}
                validations={[required, vpassword]}
              />
            </div>
            <div>
              <Button className="btn btn-primary btn-block">Register</Button>
            </div>
          </div>
        
          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </div>
      </Form>
    </div>
    </div>
  );
};

export default Register;

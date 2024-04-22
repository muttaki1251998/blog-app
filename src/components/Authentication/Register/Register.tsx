import React, { useState, ChangeEvent, useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { register } from "../../../services/authServices/authService";
import { RegisterType, ErrorType } from "./RegisterType";
import { AppDispatch } from "../../../store";
import { debounce } from "lodash";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const initialErrorStates: ErrorType = {
    usernameError: null,
    emailError: null,
    passwordError: null,
  };
  const [error, setError] = useState<ErrorType>(initialErrorStates);

  const dispatch = useDispatch<AppDispatch>();

  const validationSchema = (data: RegisterType) => {
    const { username, email, password } = data;
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Username validation
    if (username.length === 0) {
      setError((prev) => ({
        ...prev,
        usernameError: "This field cannot be empty",
      }));
    } else if (username.length < 4) {
      setError((prev) => ({
        ...prev,
        usernameError: "Username must have atleast 4 letters",
      }));
    } else {
      setError((prev) => ({ ...prev, usernameError: null }));
    }

    // Email validation
    if (email.length === 0) {
      setError((prev) => ({
        ...prev,
        emailError: "This field cannot be empty",
      }));
    } else if (email.length < 4) {
      setError((prev) => ({ ...prev, emailError: "Email too short" }));
    } else if (!email.match(validEmail)) {
      setError((prev) => ({ ...prev, emailError: "Invalid Email" }));
    } else {
      setError((prev) => ({ ...prev, emailError: null }));
    }

    // Password validation
    if (password.length === 0) {
      setError((prev) => ({
        ...prev,
        passwordError: "This field cannot be empty",
      }));
    } else if (password.length < 4) {
      setError((prev) => ({ ...prev, passwordError: "Password too short" }));
    } else {
      setError((prev) => ({ ...prev, passwordError: null }));
    }
  };
  const debounceValidation = useCallback(debounce(validationSchema, 300), []);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "username") setUsername(value);
    else if (id === "email") setEmail(value);
    else if (id === "password") setPassword(value);

    debounceValidation({ username, email, password });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user: RegisterType = {
      username,
      email,
      password,
    };
    validationSchema(user);
    if (Object.values(error).every((value) => value !== null)) {
      dispatch(register(user));
    }
  };


  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex items-center justify-center bg-gray-200"
      style={{ height: "calc(100vh - 64px)", overflowY: "auto" }}
    >
      <div className="w-full max-w-md">
        <label className="text-lg text-gray-800 text-center block mb-4">
          Join us!
        </label>
        <div className="mb-4 w-full">
          <input
            type="text"
            id="username"
            data-testid="username"
            value={username}
            name="username"
            onChange={(e) => handleChange(e)}
            placeholder="Username"
            className={`shadow border appearance-none ${
              error.usernameError ? "border-red-400" : "border-blue-400"
            } rounded text-gray-700 focus:outline-blue-400 w-full py-2 px-4`}
          />
          <div>
            {error.usernameError && (
              <p className="text-red-700 text-sm">{error.usernameError}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="email"
            value={email}
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="Email"
            className={`shadow border appearance-none ${
              error.emailError ? "border-red-400" : "border-blue-400"
            } rounded text-gray-700 focus:outline-blue-400 w-full py-2 px-4`}
          />
          <div>
            {error.emailError && (
              <p className="text-red-700 text-sm">{error.emailError}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="Password"
            className={`shadow border appearance-none ${
              error.passwordError ? "border-red-400" : "border-blue-400"
            } rounded text-gray-700 focus:outline-blue-400 w-full py-2 px-4`}
          />
          <div>
            {error.passwordError && (
              <p className="text-red-700 text-sm">{error.passwordError}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-black rounded shadow py-2 px-4 text-white justify-center hover:bg-gray-700 transition duration 300 ease-in-out"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Register;

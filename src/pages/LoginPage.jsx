import { useState } from "react";
import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { loginUser } from "../redux/auth/authOperations";

const loginFormOptions = [
  {
    title: "Email",
    name: "email",
    type: "text",
    placeholder: "Input email",
  },
  {
    title: "Password",
    name: "password",
    type: "text",
    placeholder: "Input password",
  },
];

const dataForm = {
  email: "",
  password: "",
  name: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (form) => dispatch(loginUser(form)); // fetch()

  return (
    <>
      <h1>LoginPage</h1>
      <AuthForm
        btnTitle={"Login"}
        cbOnSubmit={handleSubmit}
        linkTitle="Register"
        pathname={"/register"}
        options={loginFormOptions}
        initialValues={dataForm}
      />
    </>
  );
};

export default LoginPage;

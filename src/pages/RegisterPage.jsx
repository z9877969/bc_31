import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { registerUser } from "../redux/auth/authOperations";

const registerFormOptions = [
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
//   {
//     title: "Name",
//     name: "name",
//     type: "text",
//     placeholder: "Input name",
//   },
];

const dataForm = {
  email: "",
  password: "",
//   name: "",
};

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (form) => {
    dispatch(registerUser(form));
  };

  return (
    <>
      <h1>RegisterPage</h1>
      <AuthForm
        btnTitle={"Register"}
        cbOnSubmit={handleSubmit}
        linkTitle={"Login"}
        pathname="/login"
        options={registerFormOptions}
        initialValues={dataForm}
      />
    </>
  );
};

export default RegisterPage;

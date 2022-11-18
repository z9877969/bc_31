import { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({
  cbOnSubmit,
  btnTitle,
  pathname,
  linkTitle,
  options,
  initialValues,
}) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", width: "500px" }}
    >
      {options.map((el) => (
        <label>
          {el.title}
          <input
            type={el.type}
            name={el.name}
            // form.email | form.password | form.name
            value={form[el.name]}
            onChange={handleChange}
            placeholder={el.placeholder}
          />
        </label>
      ))}

      <button style={{ width: "150px" }} type="submit">
        {btnTitle}
      </button>
      <Link to={pathname}>{linkTitle}</Link>
    </form>
  );
};

export default AuthForm;

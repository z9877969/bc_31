import s from "./Button.module.scss";

const Button = ({ cbOnClick, title, isDisbaled }) => {
  return (
    <button
      className={s.btn}
      type="button"
      disabled={isDisbaled}
      onClick={cbOnClick}
    >
      {title}
    </button>
  );
};

export default Button;

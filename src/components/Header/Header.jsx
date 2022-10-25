import clsx from "clsx";
import s from "./Header.module.css";
import { logo as logoImg } from "../../assets/img";
import sprite from "../../assets/icons/sprite.svg";

console.log("logoImg :>> ", logoImg);

console.log("s :>> ", s);

const Header = () => {
  const isShow = true;
  return (
    // <header className={`${s.header} ${isShow ? s.test : ""}`}>
    <header className={isShow ? s.headerActive : s.header}>
      {/* <header className={clsx(s.header, isShow && s.test)}> */}
      <a href="#">
        <img src={logoImg} className={s.logo} alt="" />
      </a>
      <div className={s["user-info"]}>
        <span className={s.userName}>B</span>
        <span className={s.userEmail}>user@mail.com</span>
      </div>
      <div className={s.cartInfo}>
        <button type="button" className={s.btnCart}>
          <svg>
            <use href={sprite + "#icon-cart"}></use>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

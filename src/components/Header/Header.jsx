import clsx from "clsx";
import s from "./Header.module.css";
import { logo as logoImg } from "../../assets/img";
import sprite from "../../assets/icons/sprite.svg";

const Header = ({ openCart }) => {
  const isShow = true;
  return (
    <header className={clsx(s.header, isShow && s.test)}>
      <a href="#">
        <img src={logoImg} className={s.logo} alt="" />
      </a>
      <div className={s["user-info"]}>
        <span className={s.userName}>B</span>
        <span className={s.userEmail}>user@mail.com</span>
      </div>
      <div className={s.cartInfo}>
        <button onClick={openCart} type="button" className={s.btnCart}>
          <svg>
            <use href={sprite + "#icon-cart"}></use>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

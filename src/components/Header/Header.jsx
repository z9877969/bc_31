import Container from "../Container/Container";
import sprite from "../../assets/icons/sprite.svg";
import s from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = ({ title, withBtn }) => {
  const navigate = useNavigate();

  return (
    <header>
      <Container>
        <div className={s.wrapper}>
          {withBtn && (
            <button
              type="button"
              className={s.btnGoback}
              onClick={() => navigate(-1)}
            >
              <svg>
                <use href={sprite + "#icon-arrow-left2"}></use>
              </svg>
            </button>
          )}

          <h2 className="main-title">{title}</h2>
        </div>
      </Container>
    </header>
  );
};

export default Header;

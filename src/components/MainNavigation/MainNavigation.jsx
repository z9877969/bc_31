import { Link } from "react-router-dom";
import Container from "../Container/Container";
import s from "./MainNavigation.module.scss";

const MainNavigation = () => {
  return (
    <section>
      <Container>
        <div className={s.wrapper}>
          <Link to="/history/expense" className={s.btn} type="button">
            Всі витрати
          </Link>
          <Link to="/history/income" className={s.btn} type="button">
            Всі доходи
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default MainNavigation;

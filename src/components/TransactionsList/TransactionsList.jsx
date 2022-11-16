import Container from "../Container/Container";
import s from "./TransactionsList.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const TransactionsList = ({transactions}) => {
  return (
    <section>
      <Container>
        <ul className={s.list}>
          {
            transactions.map(el => <li key={el.id} className={s.item}>
              <div className={s["content-wrapper"]}>
                <div className={s["descr-wrapper"]}>
                  <span className={s.date}>{el.date}, {el.time} </span>
                  <span className={s.comment}>{el.comment}</span>
                </div>
                <div className={s["summ-wrapper"]}>
                  <span className={s.summ}>{el.sum}</span>
                  <span className={s.currency}>{el.currency}</span>
                </div>
              </div>
              <div className={s["btn-wrapper"]}>
                <button className={s["btn-action"]} type="button">
                  <svg>
                    <use href={sprite + "#icon-edit-pencil"}></use>
                  </svg>
                </button>
                <button className={s["btn-action"]} type="button">
                  <svg>
                    <use href={sprite + "#icon-trash"}></use>
                  </svg>
                </button>
              </div>
            </li>)
          }
          
        </ul>
      </Container>
    </section>
  );
};

export default TransactionsList;
